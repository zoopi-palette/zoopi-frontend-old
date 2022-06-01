import {NextPage} from "next";
import React from "react"
import {LayoutBasic} from "components/LayoutBasic";


const CertificationPage: NextPage = () => {
  return (
    <LayoutBasic>
      <div css={{
        display: "flex",
        flexDirection: "column",
        paddingTop: "48px"
      }}>
        <div
          css={{
            display: "flex",
            flexDirection: "column",
          }}>
          <span>{"나의 동물"}</span>
          <h1>{"(temporary) 1st blood donation"}</h1>
        </div>
        <div css={{
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
          marginTop: "32px"
        }}>
          <div css={{
            width: "295px"
          }}>
            {"list"}
          </div>
          <div css={{
            flexGrow: 1,
          }}>
            {"card-container"}
          </div>
        </div>
      </div>
    </LayoutBasic>
  )
}

export default CertificationPage