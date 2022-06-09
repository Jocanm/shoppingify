import type { AppProps } from 'next/app'
import NextNProgress from 'nextjs-progressbar'
import { ThemeProvider } from 'styled-components'
import { GlobalStyle, themes } from '../shared'
import { SessionProvider } from "next-auth/react"
import { Provider } from 'react-redux'
import { store } from '../config/redux'
import { AuthComponent } from '../components'
import { Toaster, DefaultToastOptions } from 'react-hot-toast';

const toastOptions: DefaultToastOptions = {
   style: {
      borderRadius: '5px',
      background: '#333',
      color: '#fff',
   },
   position: "top-center",
   duration: 3000,
}

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {

   return (
      <Provider store={store}>
         <SessionProvider session={session}>
            <ThemeProvider theme={themes}>
               <AuthComponent>

                  <Component {...pageProps} />
                  <NextNProgress />
                  <GlobalStyle />
                  <Toaster toastOptions={toastOptions} />

               </AuthComponent>
            </ThemeProvider>
         </SessionProvider>
      </Provider>
   )
}

export default MyApp
