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

import Head from "next/head";
import { useCart } from "@/hooks/useCart";
import { toast } from "react-toastify";
import { Loading } from "@/components/loading";

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
  const { dataCart, setdataCart } = useCart();

  function handleAddProduct() {
    const isProductInCart = dataCart.some((item) => item.id === product.id);

    if (!isProductInCart) {
      setdataCart((prevState) => [{ ...product, quantity: 1 }, ...prevState]);
    } else {
      setdataCart((prevState) =>
        prevState.map((data) => {
          if (data.id === product.id) {
            return { ...data, quantity: data.quantity + 1 };
          }

          return data;
        })
      );
    }

    toast.success(`${product.name} adicionado(a)`, {
      theme: "dark",
      autoClose: 500,
      pauseOnHover: false,
    });
  }
  const { isFallback } = useRouter();

  if (isFallback) {
    return <Loading />;
  }

  return (
    <>
      <Head>
        <title>{`${product.name} | Ignite Shop`}</title>
      </Head>
      <ProductHome>
        <ImageContainer>
          <Image width={520} height={480} src={product.imageUrl} alt="" />
        </ImageContainer>

        <DetailsContainer>
          <h1>{product.name}</h1>
          <span>{product.price}</span>
          <p>{product.description}</p>

          <button onClick={handleAddProduct}>Colocar na sacola</button>
        </DetailsContainer>
      </ProductHome>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const product = await stripe.products.list({
    expand: ["data.default_price"],
  });
  const arrayList = product.data.map(item=> {
    return {
      params: {
        id: item.id
      }
    }
  })


  return {
    paths: arrayList,
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps<any, { id: string }> = async ({
  params,
}) => {
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
        defaultPriceId: price.id,
      },
    },
    revalidate: 60,
  };
};
