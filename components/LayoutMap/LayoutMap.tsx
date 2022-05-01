import React from "react";
import {HeaderBar} from "components/HeaderBar";
import {SearchBar} from "components/SearchBar";
import {Stack} from "components/Stack";

type LayoutMapProps = {
  children: React.ReactNode;
};

const LayoutMap = ({children}: LayoutMapProps) => {
  return (
    <div
      css={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        height: "100vh",
      }}
    >
      <HeaderBar />
      <SearchBar />
      <div css={{flex: 1, height: 10}}>
        <Stack
          spacing="29px"
          divider={<hr css={{width: "88%", color: "#DDDDDD"}} />}
        >
          <div css={{height: 200}}>item2</div>
          <div css={{height: 200}}>item2</div>
          <div css={{height: 200}}>item2</div>
          <div css={{height: 200}}>item2</div>
          <div css={{height: 200}}>item2</div>
        </Stack>

        {/* naver map */}
        <div css={{width: "100%"}}>{children}</div>
      </div>
    </div>
  );
};

export default LayoutMap;
