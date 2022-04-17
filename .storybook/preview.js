import {GlobalStyle} from "../styles/globalStyle"
import {ThemeProvider} from "../styles/theme"

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

export const decorators = [
  (Story) => (
    <ThemeProvider>
      <GlobalStyle/>
      <Story />
    </ThemeProvider>
  ),
];