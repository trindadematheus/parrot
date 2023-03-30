import 'regenerator-runtime/runtime'

import type { AppProps } from 'next/app'
import { Toaster } from 'react-hot-toast';

import { GlobalStyle } from '../styles/global'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />

      <GlobalStyle />
      <Toaster />
    </>
  )
}
