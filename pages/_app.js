import WrapperApp from '../containers/Wrapper/App'
import GlobalStyle from '../globalStyle'

function MyApp ({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <WrapperApp Component={Component} pageProps={pageProps} />
    </>
  )
}

export default MyApp
