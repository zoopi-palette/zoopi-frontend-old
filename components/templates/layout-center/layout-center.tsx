import {useTheme} from "@emotion/react"
import React from "react";

export type LayoutCenterProps = {
  children: React.ReactNode,
};

export const LayoutCenter = ({children}: LayoutCenterProps) => {
  const theme = useTheme();

  return (
    <div css={{
      display: "flex",
      flexDirection: "column",
      width: "100%",
      minHeight: "100vh",
    }}>
      <div css={{
        backgroundColor: theme.colors["grey-20"],
        justifyContent: "center",
        flexGrow:1,
        paddingTop: 72,
        paddingBottom: 48,
      }}>
        {children}
      </div>
      <footer css={{
        backgroundColor: theme.colors["grey-10"],
        height: 168,
        padding: "31 0",
        justifyContent: "center",
      }}>Footer</footer>
    </div>
  )}
