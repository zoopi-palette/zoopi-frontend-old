import type {AppProps} from "next/app";
import {wrapper} from "modules/store";
import {GlobalStyle} from "styles/globalStyle";
import {ThemeProvider} from "styles/theme";
import {ModalProvider} from "utils/modal";

function MyApp({Component, pageProps}: AppProps) {
  return (
    <ThemeProvider>
      <GlobalStyle />
      <ModalProvider>
        <Component {...pageProps} />
      </ModalProvider>
    </ThemeProvider>
  );
}

export default wrapper.withRedux(MyApp);
