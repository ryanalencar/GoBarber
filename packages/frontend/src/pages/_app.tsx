import React from 'react'
import { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import { Provider } from 'react-redux'
import { ToastContainer } from 'react-toastify'
import { PersistGate } from 'redux-persist/integration/react'

// import '~/config/Reactotron'
import GlobalStyle from '~/styles/global'
import theme from '~/styles/theme'
import { store, persistor } from '~/store'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
          <GlobalStyle />
          <ToastContainer autoClose={3000} />
        </ThemeProvider>
      </PersistGate>
    </Provider>
  )
}

export default MyApp
