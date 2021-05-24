import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useRouter } from 'next/router'
import { auth, provider } from '../../../config/firebase'
import { setUserSignIn, setUserSignOut } from '../../../store/features/user'
import Header from '../../Header'

function WrapperApp (props) {
  const { Component, pageProps } = props
  const dispatch = useDispatch()
  const { name } = useSelector(state => state.user)
  const router = useRouter()

  const handleLogin = () => {
    auth
      .signInWithPopup(provider)
      .then(result => {
        console.log({ result })
        dispatch(setUserSignIn(result.user))
      })
      .catch(err => console.log(err))
  }
  const handleLogout = () => {
    auth
      .signOut()
      .then(() => {
        dispatch(setUserSignOut())
        router.push('/login')
      })
      .catch(err => console.error(err))
  }

  useEffect(() => {
    auth.onAuthStateChanged(async user => {
      if (!!user) {
        dispatch(setUserSignIn(user))
        // router.push('/')
      }
    })
  }, [])

  return (
    <>
      <Header handleLogin={handleLogin} handleLogout={handleLogout} />
      <Component {...pageProps} />
    </>
  )
}

export default WrapperApp
