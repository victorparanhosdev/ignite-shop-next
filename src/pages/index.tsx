import { GetStaticProps } from "next";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

import { HomeContainer, Product } from "@/styles/pages/home";
import Image from "next/image";
import { useCart } from "@/hooks/useCart";
import { stripe } from "@/lib/stripe";
import Stripe from "stripe";
import Link from "next/link";
import Head from "next/head";
import { Handbag } from "@phosphor-icons/react";
import { MouseEvent } from "react";
import {toast } from 'react-toastify';

import { ProductProps } from "@/hooks/useCart";

interface HomeProps {
  products: ProductProps[]
}


export default function Home({ products }: HomeProps) {
  const {dataCart, setdataCart} = useCart()


  const [slideRef] = useKeenSlider({
    slides: {
      perView: 3,
      spacing: 48,
    },
  });

function handleAddCart(event: MouseEvent<HTMLButtonElement>, product: ProductProps){
    event.preventDefault()
    event.stopPropagation();

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
    <HomeContainer ref={slideRef} className="keen-slider">
      
      {products.map((product) => {
        return (
          
          <Link href={`/product/${product.id}`} key={product.id} prefetch={false}>
            <Product className="keen-slider__slide number-slide1">
              <Image
                width={520}
                height={480}
                src={product.imageUrl}
                alt=""
                priority
              />
              <footer>
                <div>
                <strong>{product.name}</strong>
                <span>{product.price}</span>
                </div>
                <button type="button" onClick={(e)=> handleAddCart(e, product)}><Handbag weight='bold' size={32} /></button>
              </footer>
            </Product>
          </Link>
        );
      })}
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
      defaultPriceId: price.id,
    };
  });

  return {
    props: {
      products,
    },
    revalidate: 60,
  };
};
