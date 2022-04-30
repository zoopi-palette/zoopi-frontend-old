import React from "react";
import {Select} from "components/Select";

export const SearchBar = () => {
  const hrColor = "#DDDDDD";

  return (
    <section
      css={{
        height: 68,
        padding: 12,
        alignItems: "center",
        display: "flex",
        // justifyContent: "space-between",
      }}
    >
      <input type="text" placeholder="검색어를 입력해 주세요" />
      <hr css={{height: 24, color: hrColor}} />
      <Select id="distance" name="거리순"></Select>
      <Select id="distance" name="동물 선택"></Select>
      <Select id="distance" name="혈액형 선택"></Select>
    </section>
  );
};
