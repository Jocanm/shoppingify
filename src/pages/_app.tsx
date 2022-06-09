import { SessionProvider } from "next-auth/react"
import type { AppProps } from 'next/app'
import NextNProgress from 'nextjs-progressbar'
import { DefaultToastOptions, Toaster } from 'react-hot-toast'
import { Provider } from 'react-redux'
import { ThemeProvider } from 'styled-components'
import { AuthComponent, ProtectedRoute } from '../components/auth'
import { store } from '../config/redux'
import { GlobalStyle, themes } from '../shared'

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

                  {
                     //@ts-ignore
                     Component.auth
                        ? (
                           <ProtectedRoute>
                              <Component {...pageProps} />
                           </ProtectedRoute>
                        )
                        : <Component {...pageProps} />
                  }
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
