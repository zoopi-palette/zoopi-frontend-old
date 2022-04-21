import {useTheme} from "@emotion/react";
import type {NextPage} from "next"
import Link from "next/Link"
import Image from "next/image"
import {Button} from "components/button"
import {LayoutCenter} from "components/templates/layout-center"

const Home: NextPage = () => {
  const theme = useTheme();
  
  const buttonWidth = 400;

  const labelStyled = {
    marginBottom: 7,
    fontWeight: 400,
    fontSize: 14,
    color: theme.colors["grey-50"],
  };

  const buttonStyled = {
    backgroundColor: "transparent",
    border: `1px solid ${theme.colors["grey-40"]}`,
    width: buttonWidth,  
    color: theme.colors["grey-90"],
    marginTop: 16,
    fontWeight: 700,
  }

  return (
    <LayoutCenter>
      <section css={{
        flexDirection: "column",
        alignItems: "center",
        height: "fit-content"}}>
        <span css={{width :157,height:59}}>ZOOPi Logo</span>
        <div css={{flexDirection: "column", width:"100%"}}>
          {/* TODO: input 컴포넌트가 생성되면, form컴포넌트를 생성할 예정 */}
          <form css={{
            marginBottom: 32, 
            display: "flex",
            flexDirection: "column"}}>
            <label css={labelStyled}>이메일</label>
            <input type={"email"} name="email" placeholder="sample@example.co.kr"></input>
          </form>
          <form css={{
            marginBottom: 32, 
            display: "flex",
            flexDirection: "column"}}>
            <label css={labelStyled}>비밀번호</label>
            <input type={"password"} name="password"></input>
          </form>
        </div>
        <div css={{flexDirection: "column"}}>
          <Button
            color="main" 
            appearance="filled"
            css={{fontWeight: 700,}}
          >로그인</Button>
          <Button css={buttonStyled}>
            <div css={{position: "absolute"}}>이미지</div>
            카카오로 시작하기
          </Button>
          <Button css={buttonStyled}>
            <div css={{position: "absolute"}}>이미지</div>
            네이버로 시작하기
          </Button>
          <div css={{marginTop: 16, alignItems: "center"}}>
            <Link href="/" passHref>
              <a css={{
                width: buttonWidth/2,
                padding: "13px 0",
                fontSize: 14,
                textAlign: "center",
                color: theme.colors["grey-60"]
              }}>회원가입</a></Link>
            <hr css={{
              height: 16,
              color: theme.colors["grey-50"]
            }}></hr>
            <Link href="/" passHref>
              <a css={{
                width: buttonWidth/2,
                padding: "13px 0",
                fontSize: 14,
                textAlign: "center",
                color: theme.colors["grey-60"]
              }}>비밀번호 찾기</a></Link>
          </div>
        </div>
      </section>
    </LayoutCenter>
  )
}

export default Home
