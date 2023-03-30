import 'regenerator-runtime/runtime'

import type { AppProps } from 'next/app'
import Head from 'next/head';
import { Toaster } from 'react-hot-toast';

import { GlobalStyle } from '../styles/global'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Parrot: Practice your english by talking</title>
      </Head>

      <Component {...pageProps} />

      <GlobalStyle />
      <Toaster />
    </>
  )
}
