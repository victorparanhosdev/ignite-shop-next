import Head from 'next/head'
import {ImageContainer, SuccessContainer} from '../styles/pages/sucess'
import Link from 'next/link'
import { GetServerSideProps } from 'next'
import { stripe } from '@/lib/stripe'
import Stripe from 'stripe'
import Image from 'next/image'

interface SucessProps {
  product: {
    name: string,
    item: string,
    imageUrl: string
  }
}

export default function Sucess({product}: SucessProps) {

    const [firstName] = product.name.split(" ")

    return (

      <>
      <Head>
        <title>Compra Efetuada | Ignite Shop</title>
        <meta name='robots' content='noindex'/>
      </Head>
      <SuccessContainer>
      <h1>Compra efetuada</h1>

      <ImageContainer>
        <Image width={520} height={480} src={product.imageUrl} alt="" />
      </ImageContainer>

      <p>
        Uhuul <strong>{firstName}</strong>, sua <strong>{product.item}</strong> já está a caminho da sua casa.
      </p>

      <Link href="/">
        Voltar ao catálogo
      </Link>
    </SuccessContainer>
      </>
    )
  }


export const getServerSideProps: GetServerSideProps = async ({query})=> {

  if(!query.session_id){
    return {
      redirect: {
        destination: '/',
        permanent: false,
      }
    }
   
  }

  const sessionId = String(query.session_id)


  const product = await stripe.checkout.sessions.retrieve(sessionId, {
    expand: ['line_items', 'line_items.data.price.product'],

  })
  
  console.log(product)
  const productS = product.line_items!.data[0].price!.product as Stripe.Product

  return {
    props: {
      product: {
        name: product.customer_details!.name,
        item: product.line_items!.data[0].description,
        imageUrl: productS.images[0]
      }
    }
  }
}