import {css, useTheme} from "@emotion/react";
import {ReactNode} from "react"

type WhiteBoxProps = {
  children:ReactNode,
  hasShadow?: boolean,
}

export const WhiteBox = ({children,hasShadow=false}:WhiteBoxProps) => {
  const theme = useTheme();

  return (
    <section css={css`
      flex-direction: column;
      border-radius: 12px;
      background-color: ${theme.colors["white"]};
      align-items: center;
      padding: 0 102px;
      height: fit-content;
      box-shadow: ${hasShadow && "12px 18px 19px rgba(224, 227, 231, 0.22)"};
      `}>{children}</section>
  )
}
