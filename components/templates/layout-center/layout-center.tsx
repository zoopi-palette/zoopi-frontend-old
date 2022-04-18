import {css} from "@emotion/react"
import React from "react";

export type LayoutCenterProps = {
  children: React.ReactNode,
};

export const LayoutCenter = ({children}: LayoutCenterProps) => (
  <div css={css`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100vh;
  `}>
    <div css={css`
  background-color: #F7F8F9;
  justify-content: center;
  flex-grow:1;
  padding-top: 72px;
  `}>
      {children}
    </div>
    <footer css={css`
    height: 168px;
    padding: 31px 0;
    justify-content: center;
    `}>footer</footer>
  </div>
);
