import { DefaultSeo } from 'next-seo'
import { AppProps } from 'next/app'
import { ThemeProvider } from 'theme-ui'
import { theme } from '../theme'

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={theme}>
      <DefaultSeo
        title='next-boilerpack - A nextjs boilerplate with some cool stuff added to it'
        description='next-boilerpack is a next.js boilerplate that includes many of the commonly used tools and libraries alongside to make starting a new project fast and effortless'
      />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default App
