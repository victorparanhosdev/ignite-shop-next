import { GetStaticProps } from "next";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

import { HomeContainer, Product } from "@/styles/pages/home";
import Image from "next/image";

import { stripe } from "@/lib/stripe";
import Stripe from "stripe";
import Link from "next/link";

interface HomeProps {
  products: {
    id: string;
    name: string;
    imageUrl: string;
    price: string;
  }[];
}

export default function Home({ products }: HomeProps) {
  const [slideRef] = useKeenSlider({
    slides: {
      perView: 3,
      spacing: 48,
    },
  });

  return (
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
                <strong>{product.name}</strong>
                <span>{product.price}</span>
              </footer>
            </Product>
          </Link>
        );
      })}
    </HomeContainer>
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
    };
  });

  return {
    props: {
      products,
    },
    revalidate: 60,
  };
};
