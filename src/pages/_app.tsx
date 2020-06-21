import { theme } from '@src/theme'
import { AppProps } from 'next/app'
import { ThemeProvider } from 'theme-ui'

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default App
