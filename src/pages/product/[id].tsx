import {DetailsContainer, ImageContainer, ProductHome} from '../../styles/pages/product'

import ImgExemplo from '../../../public/assets/camisa2.png'

import Image from 'next/image'
import { GetStaticPaths, GetStaticProps } from 'next'
import { stripe } from '@/lib/stripe'
import Stripe from 'stripe'
import { useRouter } from 'next/router'


interface ProductProps {
  product: {
    id: string,
    name: string,
    imageUrl: string,
    price: string,
    description: string,
  }
}

export default function Product({product}: ProductProps) {
  const { isFallback } = useRouter()
  
  if(isFallback) {
    return <h1>LOADING...</h1>
  }


    return (
      <ProductHome>
        <ImageContainer>
          <Image width={520} height={480} src={product.imageUrl} alt="" />
        </ImageContainer>

        <DetailsContainer>
          <h1>{product.name}</h1>
          <span>{product.price}</span>
          <p>{product.description}</p>

          <button>Comprar agora</button>

        </DetailsContainer>

      </ProductHome>
    )
  }


  export const getStaticPaths: GetStaticPaths = async ()=> {

    return {
      paths: [
        {params: {id: 'prod_PL4DmFoLRaznuC'}},
      ],
      fallback: 'blocking',
    }
  }


  export const getStaticProps: GetStaticProps<any, {id: string}> = async ({params})=> {
      
      const procutID = params!.id;

      const product = await stripe.products.retrieve(procutID, {
        expand: ['default_price']
      })

      const price = product.default_price as Stripe.Price

    


    return {
        props: {
           product: {
            id: product.id,
            name: product.name,
            imageUrl: product.images[0],
            price: new Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'}).format(price.unit_amount! / 100),
            description: product.description,
           }
        },
        revalidate: 60,
    }
  }
  