import {Global, css} from "@emotion/react"
import reset from "emotion-reset"

export const GlobalStyle = () => {
  return (<Global styles={css`
    ${reset}
    * {
      box-sizing: border-box;
    }
    body {
      width:100%;
      overflow-x:hidden;
    }

    html {
      font-size: 16px;
      scroll-behavior: smooth;
      width:100%;
      overflow-x:hidden;
    }

    div, section, header, footer {
      display: flex;
    }

    button {
      border:none;
      outline:none;
      background: none;
      box-shadow: none;
      cursor: pointer;
    }

    a {
      text-decoration: none;
    }

    input {
      border:none;
      outline:none;
      :focus-visible{
        outline: none;
      }
    }

    svg, path{
      color: inherit;
      width: inherit;
      height: inherit;
    }
`}/>)
}