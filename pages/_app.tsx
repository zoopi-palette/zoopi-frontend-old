import type {AppProps} from "next/app";
import {Provider} from "react-redux";
import {wrapper} from "modules/store";
import {GlobalStyle} from "styles/globalStyle";
import {ThemeProvider} from "styles/theme";

function MyApp({Component, pageProps}: AppProps) {
  return (
    <ThemeProvider>
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default wrapper.withRedux(MyApp);
