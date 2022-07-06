import { NextPage } from "next"
import { SessionProvider } from "next-auth/react"
import type { AppProps } from 'next/app'
import NextNProgress from 'nextjs-progressbar'
import { ReactElement, ReactNode } from "react"
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

export type NextPageWithLayout = NextPage  & {
   getLayout?: (page: ReactElement) => ReactNode;
   auth?: boolean;
}

type AppPropsWithLayout = AppProps & {
   Component: NextPageWithLayout
}

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppPropsWithLayout) {

   const getLayout = Component.getLayout ?? ((page) => page)

   return (
      <Provider store={store}>
         <SessionProvider session={session}>
            <ThemeProvider theme={themes}>
               <AuthComponent>

                  {Component.auth
                     ? (
                        <ProtectedRoute>
                           {/* <Component {...pageProps} /> */}
                           {getLayout(<Component {...pageProps} />)}
                        </ProtectedRoute>
                     )
                     : <Component {...pageProps} />}
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
