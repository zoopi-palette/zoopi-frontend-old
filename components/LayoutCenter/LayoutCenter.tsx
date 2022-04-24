import React from "react";
import {FooterBar} from "components/FooterBar"; 
import {HeaderBar} from "components/HeaderBar"; 

export type LayoutCenterProps = {
  children: React.ReactNode,
};

export const LayoutCenter = ({children}: LayoutCenterProps) => {
  return (
    <div css={{
      display: "flex",
      flexDirection: "column",
      width: "100%",
      minHeight: "100vh",
    }}>
      <HeaderBar/>
      <div css={{
        justifyContent: "center",
        flexGrow:1,
        paddingTop: 72,
        paddingBottom: 48,
      }}>
        {children}
      </div>
      <FooterBar/>
    </div>
  )}
