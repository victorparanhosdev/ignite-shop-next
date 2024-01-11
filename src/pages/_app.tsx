import type { AppProps } from 'next/app'
import Head from 'next/head'
import { globalStyles } from '@/styles/global'
import { Header } from '@/components/header'
import { AppContainer} from '@/styles/pages/app'
import * as Dialog from '@radix-ui/react-dialog'

import {CartProvider} from '../hooks/useCart'
globalStyles()



export default function App({ Component, pageProps }: AppProps) {



  return (
    <Dialog.Root>
    <CartProvider>
    <AppContainer>
     <Head>
        <title>Ignite Shop</title>
      </Head>
      <Header />

      <Component {...pageProps} />

    </AppContainer>
    </CartProvider>
    </Dialog.Root>
  )
}
