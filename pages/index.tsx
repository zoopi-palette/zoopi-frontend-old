import {useTheme} from "@emotion/react";
import type {NextPage} from "next"
import Image from "next/image"
import {Button} from "components/button"
import {LayoutCenter} from "components/templates/layout-center"
import {WhiteBox} from "components/whiteBox";

const Home: NextPage = () => {
  const theme = useTheme();
  
  const buttonWidth = 386;

  const labelStyled = {
    marginBottom: 7,
    fontWeight: 400,
    fontSize: 14,
    color: theme.colors["grey-50"],
  };

  const formStyled = {
    marginBottom: 32,
    flexDirection: "column",
  };

  return (
    <LayoutCenter>
      <WhiteBox hasShadow>
        <p css={{
          paddingTop: 32,
          marginBottom: 40,
          fontSize: 32,
          fontWeight: 700,
        }}>로그인</p>
        <div css={{flexDirection: "column"}}>
          {/* TODO: input 컴포넌트가 생성되면, form컴포넌트를 생성할 예정 */}
          <form css={formStyled}>
            <label css={labelStyled}>이메일</label>
            <input type={"email"} name="email"></input>
          </form>
          <form css={formStyled}>
            <label css={labelStyled}>비밀번호</label>
            <div>
              <input type={"password"} name="password"
                css={{flexBasis: "90%"}}></input>
              <div>
                <button>눈</button>
                <button>X</button>
              </div>
            </div>
          </form>
          <div css={{marginTop: 12}}>
            <span css={{
              fontWeight: 400,
              fontSize: 12,
              color: theme.colors["grey-60"],
            }}>?</span>
            <button css={{
              fontWeight: 40,
              fontSize: 12,
              color: theme.colors["grey-60"],
            }}>이메일, 비밀번호가 기억나지 않으세요?</button>
          </div>
          <Button 
            color="main" 
            appearance="filled" 
            css={{
              width: buttonWidth,
              marginTop: 40,
            }}>로그인</Button>
        </div>
        <p css={{
          marginTop: 32,
          marginBottom: 16,
          fontWeight: 400,
          fontSize: 14,
          color: theme.colors["grey-50"]
        }}>다른 방법으로 로그인</p>
        <div css={{flexDirection: "column"}}>
          <Button css={{
            width: buttonWidth,  
            color: theme.colors["black"],
            marginBottom: 8,
            backgroundColor: "#FEE500"}}>
            <span>이미지 </span>
            카카오로 시작하기
          </Button>
          <Button css={{
            width: buttonWidth,
            color:"white",
            backgroundColor: "#03C75A"}}>
            <span>이미지 </span>
            네이버로 시작하기
          </Button>
        </div>
        <button css={{
          marginTop: 32,
          marginBottom: 48,
          fontWeight: 400,
          fontSize: 14,
          color: theme.colors["grey-60"],
          textDecorationLine: "underline",
        }}>아직 회원이 아니신가요?</button>
      </WhiteBox>
    </LayoutCenter>
  )
}

export default Home
