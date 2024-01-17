import type { AppProps } from 'next/app'
import Head from 'next/head'
import { globalStyles } from '@/styles/global'
import { Header } from '@/components/header'
import { AppContainer} from '@/styles/pages/app'
import * as Dialog from '@radix-ui/react-dialog'
import { ToastContainer } from 'react-toastify';
import {CartProvider} from '../hooks/useCart'
import 'react-toastify/dist/ReactToastify.css';
import {IconContext} from 'phosphor-react'
globalStyles()



export default function App({ Component, pageProps }: AppProps) {



  return (
    <IconContext.Provider value={{}}>
    <Dialog.Root>
    <CartProvider>
    <AppContainer>
     <Head>
        <title>Ignite Shop</title>
      </Head>
      <Header />
      <Component {...pageProps} />
      <ToastContainer />
    </AppContainer>
    </CartProvider>
    </Dialog.Root>
    </IconContext.Provider>
  )
}
