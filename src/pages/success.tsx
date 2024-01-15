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

interface SuccessProps {
  costumerName: string
  products: {
    id: string
    name: string
    imageUrl: string
  }[]
}

export default function Sucess({ costumerName, products }: SuccessProps) {
  const productsAmount = products.length
  return (
    <>
      <Head>
        <title>Compra Efetuada | Ignite Shop</title>
        <meta name="robots" content="noindex" />
      </Head>
      <SuccessContainer>
        <h1>Compra efetuada</h1>

        <CheckoutBox>
          {products.map((itemImg) => {
            return (
              <ImageContainer key={itemImg.id}>
                <Image width={520} height={480} src={itemImg.imageUrl} alt="" />
              </ImageContainer>
            );
          })}
        </CheckoutBox>

        <p>
          Uhuul <strong>{costumerName}</strong>, sua compra de{" "}
          <strong>{productsAmount}</strong>{" "}
          {productsAmount > 1 ? "camisas" : "camisa"} já está a caminho da
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
        destination: '/',
        permanent: false,
      },
    }
  }

  const sessionId = String(query.session_id)

  const session = await stripe.checkout.sessions.retrieve(sessionId, {
    expand: ['line_items', 'line_items.data.price.product'],
  })

  const costumerName = session.customer_details!.name
  const products = session.line_items!.data.map((item) => {
  const product = item.price!.product as Stripe.Product

    return {
      id: product.id,
      name: product.name,
      imageUrl: product.images[0],
    }
  })

  return {
    props: {
      costumerName,
      products,
    },
  }
}