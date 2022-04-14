import {ThemeProvider as EmotionThemeProvider, ThemeProviderProps} from "@emotion/react"

const palette = {
  "grey-10": "#FDFDFD",
  "grey-20": "#F7F8F9",
  "grey-30": "#E9EBEE",
  "grey-40": "#C5C8CE",
  "grey-50": "#8B95A0",
  "grey-60": "#646F7C",
  "grey-70": "#374553",
  "grey-80": "#28323C",
  "grey-90": "#161D24",
}

const theme = {
  colors: {
    ...palette,
    main: "#FF3E3D",
    sub: "#3B91F5",
    error: "#FF6A3A",
    success: "#4EC28A",
  }
}

export const ThemeProvider = ({children}: {children: React.ReactNode}) => {
  return (
    <EmotionThemeProvider theme={theme}>
      {children}
    </EmotionThemeProvider>
  )
}