import {useTheme} from "@emotion/react";
import React from "react";
import {FooterBar} from "components/FooterBar"; 
import {HeaderBar} from "components/HeaderBar"; 

export type LayoutBasicProps = {
  children: React.ReactNode
};

export const LayoutBasic = ({children}: LayoutBasicProps) => {
  const theme = useTheme();
  
  return (
    <div css={{
      display: "flex",
      flexDirection: "column",
      width: "100%",
      minHeight: "100vh",
    }}>
      <HeaderBar/>
      <div css={{
        width: "100%",
        display: "flex",
        flexGrow: 1,
        justifyContent: "center",
        backgroundColor: theme.colors.bg,
      }}>
        <div css={{
          width: "100%",
          maxWidth: "1200px",
          flexGrow: 1,
        }}>
          {children}
        </div>
      </div>
      <FooterBar/>
    </div>
  )}
