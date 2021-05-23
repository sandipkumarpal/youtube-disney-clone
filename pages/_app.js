import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import dynamic from 'next/dynamic'
import PropTypes from 'prop-types'
import { Provider } from 'react-redux'
import WrapperApp from '../containers/Wrapper/App'
import GlobalStyle from '../globalStyle'

// const Provider = dynamic(() => import('react-redux').then(mod => mod.Provider))
import { store } from '../store'
function MyApp (props) {
  const { Component, pageProps } = props
  return (
    <Provider store={store}>
      <GlobalStyle />
      <WrapperApp Component={Component} pageProps={pageProps} />
    </Provider>
  )
}

MyApp.propTypes = {
  Component: PropTypes.elementType,
  pageProps: PropTypes.object,
  store: PropTypes.object
}

export default MyApp
