import type { AppProps } from 'next/app'
import Head from 'next/head'
import { globalStyles } from '@/styles/global'
import LogoImg from '../../public/assets/Logo.svg'
import { AppContainer, Header } from '@/styles/pages/app'
import Image from 'next/image'
globalStyles()



export default function App({ Component, pageProps }: AppProps) {
  return (
    <AppContainer>
     <Head>
        <title>Ignite Shop</title>
      </Head>
      <Header>
        <Image width={130} height={52} src={LogoImg.src} alt="" />
      </Header>
      <Component {...pageProps} />
    </AppContainer>
  )
}
