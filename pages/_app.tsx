import type {AppProps} from "next/app"
import {GlobalStyle} from "styles/globalStyle"
import {ThemeProvider} from "styles/theme"

function MyApp({Component, pageProps}: AppProps) {
  return (
    <ThemeProvider>
      <GlobalStyle/>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
