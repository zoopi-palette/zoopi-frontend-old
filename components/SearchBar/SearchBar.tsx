import React from "react";
import {Select} from "components/Select";

export const SearchBar = () => {
  const hrColor = "#DDDDDD";

  return (
    <section
      css={{
        height: 68,
        padding: 12,
        display: "flex",
        alignItems: "center",
      }}
    >
      <input
        type="text"
        placeholder="검색어를 입력해 주세요"
        css={{marginRight: 24}}
      />
      <hr css={{height: 24, color: hrColor, marginRight: 16, marginLeft: 24}} />
      <Select id="distance" name="거리순"></Select>
      <Select id="distance" name="동물 선택"></Select>
      <Select id="distance" name="혈액형 선택"></Select>
    </section>
  );
};
