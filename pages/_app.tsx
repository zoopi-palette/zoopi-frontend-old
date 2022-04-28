import type {AppProps} from "next/app";
import {Provider} from "react-redux";
import {store} from "modules/store";
import {GlobalStyle} from "styles/globalStyle";
import {ThemeProvider} from "styles/theme";

function MyApp({Component, pageProps}: AppProps) {
  return (
    <Provider store={store}>
      <ThemeProvider>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </Provider>
  );
}

export default MyApp;
