import { GetStaticProps } from "next";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import styled from '../styles/keenslider.module.css'
import { HomeContainer, Product } from "@/styles/pages/home";
import Image from "next/image";
import { useCart } from "@/hooks/useCart";
import { stripe } from "@/lib/stripe";
import Stripe from "stripe";
import Link from "next/link";
import Head from "next/head";
import { Handbag } from '@phosphor-icons/react/dist/ssr';
import { MouseEvent, useState } from "react";
import {toast } from 'react-toastify';

import { ProductProps } from "@/hooks/useCart";

interface HomeProps {
  products: ProductProps[]
}


export default function Home({ products }: HomeProps) {
  const {dataCart, setdataCart} = useCart()

  const [currentSlide, setCurrentSlide] = useState(0)
  const [loaded, setLoaded] = useState(false)

  const [slideRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    slides: {
      perView: 3,
      spacing: 48,
    },
    breakpoints: {
      '(max-width: 768px)': {
        slides: {
          perView: 2,
          spacing: 48,
        },
      },
      '(max-width: 500px)': {
        slides: {
          perView: 1,
          spacing: 48,
        },
      },
    },
    initial: 0,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel)
    },
    created() {
      setLoaded(true)
    },
  });

function handleAddCart(event: MouseEvent<HTMLButtonElement>, product: ProductProps){
    event.preventDefault()


    const isProductInCart = dataCart.some(item => item.id === product.id);

    if (!isProductInCart) {
      setdataCart(prevState => [{...product, quantity: 1}, ...prevState]);
    } else {
      setdataCart(prevState => prevState.map(data => {
        if(data.id === product.id){
          return {...data, quantity: data.quantity + 1}
        }

        return data
      }));
    }

    toast.success(`${product.name} adicionado(a)`, {
      theme: 'dark',
      autoClose: 500,
      pauseOnHover: false,
    })

   

  }

  return (

    <>
    <Head>
      <title>Home | Ignite Shop</title>
    </Head>

    <HomeContainer ref={slideRef} className={`${styled.navigationwrapper} keen-slider`}>    
      {products.map((product) => {
        return (   
       
            <Product key={product.id} className="keen-slider__slide">
              <Link href={`/product/${product.id}`}  prefetch={false}>
              <Image
                width={520}
                height={480}
                src={product.imageUrl}
                alt=""
                priority
              />
              </Link>
              <footer>
                <div>
                <strong>{product.name}</strong>
                <span>{product.price}</span>
                </div>
                <button type="button" onClick={(e)=> handleAddCart(e, product)}><Handbag weight='bold' size={32} /></button>
              </footer>
            </Product>
         
        );
      })}
       {loaded && instanceRef.current && (
          <>
            <Arrow
              left
              onClick={(e: any) =>
                e.stopPropagation() || instanceRef.current?.prev()
              }
              disabled={currentSlide === 0}
            />

            <Arrow
              onClick={(e: any) =>
                e.stopPropagation() || instanceRef.current?.next()
              }
              disabled={
                currentSlide ===
                instanceRef.current.track.details.slides.length - 1
              }
            />
          </>
        )}
    </HomeContainer>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await stripe.products.list({
    expand: ["data.default_price"],
  });

  const products = response.data.map((product) => {
    const price = product.default_price as Stripe.Price;
    
    return {
      id: product.id,
      name: product.name,
      imageUrl: product.images[0],
      price: new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
      }).format(price.unit_amount! / 100),
      defaultPriceId: price.id
    };
  });

  return {
    props: {
      products,
    },
    revalidate: 60,
  };
};


function Arrow(props: {
  disabled: boolean
  left?: boolean
  onClick: (e: any) => void
}) {
  const disabled = props.disabled ? `${styled.arrowdisabled}` : ""
  return (
    <svg
      onClick={props.onClick}
      className={`${styled.arrow} ${
        props.left ? `${styled.arrowleft}` : `${styled.arrowright}`
      } ${disabled}`}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      {props.left && (
        <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
      )}
      {!props.left && (
        <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
      )}
    </svg>
  )
}