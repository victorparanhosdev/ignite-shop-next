import { GetServerSideProps } from 'next'
import {useKeenSlider} from 'keen-slider/react'
import 'keen-slider/keen-slider.min.css'
import { HomeContainer, Product } from '@/styles/pages/home'
import Image from 'next/image'
import { stripe } from '@/lib/stripe'
import Stripe from 'stripe'


interface HomeProps {
  products: {
    id: string
    name: string
    imageUrl: string
    price: number
  }[]
}


export default function Home({products}: HomeProps) {
  const [slideRef] = useKeenSlider({
    slides: {
      perView: 3,
      spacing: 48,
    }
  })


  return (
    <HomeContainer ref={slideRef} className="keen-slider">
     {products.map(products=> {
      return(
        <Product key={products.id} className="keen-slider__slide number-slide1">
        <Image width={520} height={480} src={products.imageUrl} alt="" />
        <footer>
          <strong>{products.name}</strong>
          <span>{products.price}</span>
        </footer>
      </Product>
      )
     })}
    </HomeContainer>  
  )
}


export const getServerSideProps: GetServerSideProps = async () => {
  const response = await stripe.products.list({
    expand: ['data.default_price'],
  })

  const products = response.data.map(product => {
    const price = product.default_price as Stripe.Price;
    return {
      id: product.id,
      name: product.name,
      imageUrl: product.images[0],
      price: price.unit_amount! / 100,
    }
  
   
  })


  return {
    props: {
      products
    }
  }

}