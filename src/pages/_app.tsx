import { store } from '@src/store'
import { theme } from '@src/theme'
import { DefaultSeo } from 'next-seo'
import { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import { ThemeProvider } from 'theme-ui'

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <DefaultSeo
          title="next-boilerpack - A nextjs boilerplate with some cool stuff added to it"
          description="next-boilerpack is a next.js boilerplate that includes many of the commonly used tools and libraries alongside to make starting a new project fast and effortless"
        />
        <Component {...pageProps} />
      </ThemeProvider>
    </Provider>
  )
}

export default App
