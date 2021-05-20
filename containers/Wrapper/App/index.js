import React from 'react'
import GlobalStyle from '../../../globalStyle'
import Header from '../../Header'

function WrapperApp (props) {
  const { Component, pageProps } = props
  return (
    <>
      <Header />
      <Component {...pageProps} />
    </>
  )
}

export default WrapperApp
