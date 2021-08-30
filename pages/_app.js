import 'bootswatch/dist/cosmo/bootstrap.min.css'
import '../styles/globals.css'
import React from 'react'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>FactorB</title>
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
