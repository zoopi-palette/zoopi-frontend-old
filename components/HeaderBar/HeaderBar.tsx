import {useTheme} from "@emotion/react"
import Link from "next/Link"
import React from "react"
import {Button} from "components/button";

export const HeaderBar = () => {
  const theme = useTheme();

  const link={
    color: theme.colors["grey-90"],
    fontSize: 18,
    padding: "0 16px",
    "& .clicked, :hover": {
      fontWeight: 700,
    }
  }

  const buttonStyled = {
    height: 40,
    width: 96,
    marginLeft: 16,
    fontWeight: 700,
    fontSize: 14,
  }
  
  return (
    <header css={{
      height: 72,
      padding: 22,
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      borderBottom:`1px solid ${theme.colors["grey-30"]}`
    }}>
      <ul css={{display: "flex",alignItems: "center",}}>
        <li>
          <Link href="/" passHref><a css={{width: 80, height: 30, marginRight: 42}}>ZOOPi</a></Link>
        </li>
        <li><Link href="/" passHref><a css={link}>헌혈</a></Link></li>
        <li><Link href="/" passHref><a css={link}>헌혈요청</a></Link></li>
        <li><Link href="/" passHref><a css={link}>인증</a></Link></li>
      </ul>
      <ul css={{display: "flex",alignItems: "center",}}>
        <li><Button color="gray" appearance="outline" css={buttonStyled}>로그인</Button></li>
        <li><Button color="main" appearance="outline" css={{...buttonStyled, color: theme.colors.main}}>회원가입</Button></li>
      </ul>
    </header>
  )
}
