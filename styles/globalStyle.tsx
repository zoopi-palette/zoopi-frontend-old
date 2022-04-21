import {Global, css} from "@emotion/react"
import reset from "emotion-reset"

export const GlobalStyle = () => {
  return (<Global styles={css`
    @import url(//spoqa.github.io/spoqa-han-sans/css/SpoqaHanSansNeo.css);
    ${reset}
    
    * {
      box-sizing: border-box;
    }

    body {
      width:100%;
      overflow-x:hidden;
      font-family: 'Spoqa Han Sans Neo', sans-serif;
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
/*     
    @font-face {
    font-family: 'SpoqaHanSansNeo';
    src: url(sdsf.woff2) format('woff2'),
        url(sdfs.woff) format('woff'),
        url(sdfsd.ttf) format('truetype');
    } */
`}/>)
}