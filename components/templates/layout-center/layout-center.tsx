import {css,useTheme} from "@emotion/react"
import React from "react";

export type LayoutCenterProps = {
  children: React.ReactNode,
};

export const LayoutCenter = ({children}: LayoutCenterProps) => {
  const theme = useTheme();

  return (
    <div css={css`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100vh;
  `}>
      <div css={css`
  background-color: ${theme.colors["grey-20"]};
  justify-content: center;
  flex-grow:1;
  padding-top: 72px;
  padding-bottom: 48px;
  `}>
        {children}
      </div>
      <footer css={css`
    background-color: ${theme.colors["grey-10"]};
    height: 168px;
    padding: 31px 0;
    justify-content: center;
    `}>Footer</footer>
    </div>
  )};
