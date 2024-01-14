import Head from "next/head";
import {
  ImageContainer,
  SuccessContainer,
  CheckoutBox,
} from "../styles/pages/sucess";
import Link from "next/link";
import { GetServerSideProps } from "next";
import { stripe } from "@/lib/stripe";
import Stripe from "stripe";
import Image from "next/image";

interface SucessProps {
  products: {
    name: string;
    imgUrl: string[];
    quantity: number;
  };
}

export default function Sucess({ products }: SucessProps) {

  return (
    <>
      <Head>
        <title>Compra Efetuada | Ignite Shop</title>
        <meta name="robots" content="noindex" />
      </Head>
      <SuccessContainer>
        <h1>Compra efetuada</h1>

        <CheckoutBox>
          {products.imgUrl.map((itemImg, index) => {
            return (
              <ImageContainer key={index}>
                <Image width={520} height={480} src={itemImg} alt="" />
              </ImageContainer>
            );
          })}
        </CheckoutBox>

        <p>
          Uhuul <strong>{products.name}</strong>, sua compra de{" "}
          <strong>{products.quantity}</strong>{" "}
          {products.quantity > 1 ? "camisas" : "camisa"} já está a caminho da
          sua casa.
        </p>

        <Link href="/">Voltar ao catálogo</Link>
      </SuccessContainer>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  if (!query.session_id) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  const sessionId = String(query.session_id);

  const product = await stripe.checkout.sessions.retrieve(
    sessionId,
    {
      expand: ["line_items", "line_items.data.price.product"],
    }
  );
  //console.log(product)
  const ArrayData = product.line_items!.data.map((itens) => {
    const price = itens.price as Stripe.Price;
    const product = price.product as Stripe.Product;

    return { ...product.images };
  });

  const quantity = product
    .line_items!.data.map((item) => Object.assign({}, item)) // Cria cópias seguras dos objetos
    .reduce((acc, item) => acc + (item.quantity || 0), 0);

  return {
    props: {
      products: {
        name: product.customer_details!.name,
        imgUrl: ArrayData.map((img) => img[0]),
        quantity: quantity,
      },
    },
  };
};
