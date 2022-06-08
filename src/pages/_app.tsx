import type { AppProps } from 'next/app'
import NextNProgress from 'nextjs-progressbar'
import { ThemeProvider } from 'styled-components'
import { GlobalStyle, themes } from '../shared'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={themes}>
      <Component {...pageProps} />
      <NextNProgress />
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default MyApp
