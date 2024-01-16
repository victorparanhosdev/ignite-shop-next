import type { AppProps } from 'next/app'
import Head from 'next/head'
import { globalStyles } from '@/styles/global'
import { Header } from '@/components/header'
import { AppContainer} from '@/styles/pages/app'
import * as Dialog from '@radix-ui/react-dialog'
import { ToastContainer } from 'react-toastify';
import {CartProviderr} from '../hooks/useCart'
import 'react-toastify/dist/ReactToastify.css';
import {CartProvider} from 'use-shopping-cart'
globalStyles()



export default function App({ Component, pageProps }: AppProps) {



  return (
    <Dialog.Root>

    <CartProviderr>
    <CartProvider
      mode="payment"
      cartMode="client-only"
      stripe={`${process.env.STRIPE_SECRET_KEY}`}
      successUrl={`${process.env.NEXT_URL}/success?session_id={CHECKOUT_SESSION_ID}`}
      cancelUrl={`${process.env.NEXT_URL}/`}
      currency="BRL"
      shouldPersist={true} 
      >
    <AppContainer>
     <Head>
        <title>Ignite Shop</title>
      </Head>
      <Header />

      <Component {...pageProps} />
      <ToastContainer />
    </AppContainer>
    </CartProvider>
    </CartProviderr>
    </Dialog.Root>
  )
}
