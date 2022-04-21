import {useTheme} from "@emotion/react"
import Link from "next/Link"
import React from "react"

export const FooterBar = () => {
  const theme = useTheme();

  const link = {
    fontSize: 12,
    color: theme.colors["grey-50"],
    fontWeight: 700,
    marginRight: 24
  }
  
  return (
    <footer css={{
      borderTop:`1px solid ${theme.colors["grey-30"]}`,
      backgroundColor: theme.colors["grey-10"],
      height: 168,
      padding: "31px 0px",
      justifyContent: "center",
    }}>
      <div css={{
        flexDirection: "column",
        flexBasis: "70%"
      }}>
        <div css={{
          flexDirection: "column",
          marginBottom: 44
        }}>
          <p css={{
            fontSize: 14,
            color: theme.colors["grey-50"],
            marginBottom: 4
          }}>ZOOPI</p>
          <p css={{
            fontSize: 12,
            color: theme.colors["grey-50"]
          }}>주피는 헌혈 매칭 중개자로서 의료기관이 아니므로 개인 거래정보 및 거래등에 대해 책임을 지지 않습니다.</p>
        </div>
        <ul css={{
          display: "flex",
        }}>
          <li><Link href="/" passHref><a css={link}>헌혈 가이드</a></Link></li>
          <li><Link href="/" passHref><a css={link}>서비스 이용약관</a></Link></li>
          <li><Link href="/" passHref><a css={link}>개인정보 처리방침</a></Link></li>
          <li><Link href="/" passHref><a css={link}>1:1 문의</a></Link></li>
          <li><Link href="/" passHref><a css={link}>광고문의</a></Link></li>
          <li><Link href="/" passHref><a css={link}>공지사항</a></Link></li>
        </ul>
      </div>
      <ul css={{display: "flex",alignItems: "flex-start"}}>
        <li><Link href="/" passHref><a css={{marginRight: 16}}>스토어</a></Link></li>
        <li><Link href="/" passHref><a>스토어</a></Link></li>
      </ul>
    </footer>
  )
}
