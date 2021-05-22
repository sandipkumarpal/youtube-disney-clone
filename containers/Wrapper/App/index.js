import React from 'react'
import { auth, provider } from '../../../config/firebase'
import Header from '../../Header'

function WrapperApp (props) {
  const { Component, pageProps } = props

  const handleLogin = () => {
    auth
      .signInWithPopup(provider)
      .then(result => {
        console.log({ result })
      })
      .catch(err => console.log(err))
  }

  return (
    <>
      <Header handleLogin={handleLogin} />
      <Component {...pageProps} />
    </>
  )
}

export default WrapperApp
