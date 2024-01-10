import {
  DetailsContainer,
  ImageContainer,
  ProductHome,
} from "../../styles/pages/product";
import Image from "next/image";
import { GetStaticPaths, GetStaticProps } from "next";
import { stripe } from "@/lib/stripe";
import Stripe from "stripe";
import { useRouter } from "next/router";
import axios from "axios";
import { useState } from "react";

interface ProductProps {
  product: {
    id: string;
    name: string;
    imageUrl: string;
    price: string;
    description: string;
    defaultPriceId: string;
  };
}

export default function Product({ product }: ProductProps) {

const [isLoading, setLoading] = useState(false)

 async function handleBuyProduct(){

  try {
    setLoading(true)
    const response = await axios.post('/api/checkout', {
      priceId: product.defaultPriceId,
    })
    const {checkoutUrl} = response.data
    window.location.href = checkoutUrl

  }catch(error) {
    setLoading(false)
    alert('Erro ao direcionar checkout!')
  }

    

  }
  const { isFallback } = useRouter();

  if (isFallback) {
    return <h1>LOADING...</h1>;
  }

  return (
    <>
      <ProductHome>
        <ImageContainer>
          <Image width={520} height={480} src={product.imageUrl} alt="" />
        </ImageContainer>

        <DetailsContainer>
          <h1>{product.name}</h1>
          <span>{product.price}</span>
          <p>{product.description}</p>

          <button disabled={isLoading} onClick={handleBuyProduct}>Comprar agora</button>
        </DetailsContainer>
      </ProductHome>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [{ params: { id: "prod_PL4Ew0t5dY81jk" } }],
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps<any, { id: string }> = async ({params}) => {
  const productID = params!.id;

  const product = await stripe.products.retrieve(productID, {
    expand: ["default_price"],
  });

  const price = product.default_price as Stripe.Price;

  return {
    props: {
      product: {
        id: product.id,
        name: product.name,
        imageUrl: product.images[0],
        price: new Intl.NumberFormat("pt-BR", {
          style: "currency",
          currency: "BRL",
        }).format(price.unit_amount! / 100),
        description: product.description,
        defaultPriceId: price.id
      },
    },
    revalidate: 60,
  };
};
