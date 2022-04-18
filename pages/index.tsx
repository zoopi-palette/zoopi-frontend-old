import {css, useTheme} from "@emotion/react";
import type {NextPage} from "next"
import Image from "next/image"
import {Button} from "components/button"
import {LayoutCenter} from "components/templates/layout-center"
import {WhiteBox} from "components/whiteBox";

const Home: NextPage = () => {
  const theme = useTheme();
  
  const buttonWidth = 386;

  const labelStyled = css`
  margin-bottom: 7px;
  font-weight: 400;
  font-size: 14px;
  color: ${theme.colors["grey-50"]};
  `;

  const formStyled = css`
  margin-bottom: 32px;
  flex-direction: column;
  `

  return (
    <LayoutCenter>
      <WhiteBox hasShadow>
        <p css={css`
        padding-top: 32px;
        margin-bottom: 40px;
        font-size: 32px;
        font-weight: 700;
        `}>로그인</p>
        <div css={css`flex-direction: column;`}>
          {/* TODO: input 컴포넌트가 생성되면, form컴포넌트를 생성할 예정 */}
          <form css={formStyled}>
            <label css={labelStyled}>이메일</label>
            <input type={"email"} name="email"></input>
          </form>
          <form css={formStyled}>
            <label css={labelStyled}>비밀번호</label>
            <div>
              <input type={"password"} name="password"
                css={css`flex-basis: 90%;`}></input>
              <div>
                <button>눈</button>
                <button>X</button>
              </div>
            </div>
          </form>
          <div css={css`margin-top: 12px;`}>
            <span css={css`
            font-weight: 400;
            font-size: 12px;
            color: ${theme.colors["grey-60"]};
            `}>?</span>
            <button css={css`
            font-weight: 400;
            font-size: 12px;
            color: ${theme.colors["grey-60"]};
            `}>이메일, 비밀번호가 기억나지 않으세요?</button>
          </div>
          <Button 
            color="main" 
            appearance="filled" 
            css={css`
            width: ${buttonWidth}px;
            margin-top: 40px;
            `}>로그인</Button>
        </div>
        <p css={css`
          margin-top: 32px;
          margin-bottom: 16px;
          font-weight: 400;
          font-size: 14px;
          color: ${theme.colors["grey-50"]};
          `}>다른 방법으로 로그인</p>
        <div css={css`flex-direction: column;`}>
          <Button css={css`
          width: ${buttonWidth}px;  
          color: ${theme.colors["black"]};
          margin-bottom: 8px;
          background-color: #FEE500;`}>
            <span>이미지 </span>
            카카오로 시작하기
          </Button>
          <Button css={css`
          width: ${buttonWidth}px;
          color:white;
          background-color: #03C75A;`}>
            <span>이미지 </span>
            네이버로 시작하기
          </Button>
        </div>
        <button css={css`
        margin-top: 32px;
        margin-bottom: 48px;
        font-weight: 400;
        font-size: 14px;
        color: ${theme.colors["grey-60"]};
        text-decoration-line: underline;
        `}>아직 회원이 아니신가요?</button>
      </WhiteBox>
    </LayoutCenter>
  )
}

export default Home
