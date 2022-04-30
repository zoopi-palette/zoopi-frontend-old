import {useTheme} from "@emotion/react";
import {Button} from "components/Button";
import Select from "components/Select/Select";
import React from "react";

const SearchBar = () => {
  const theme = useTheme();

  const hrColor = "##DDDDDD";

  return (
    <header
      css={{
        height: 68,
        padding: 12,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        borderBottom: `1px solid ${theme.colors["grey-30"]}`,
      }}
    >
      <input type="text" placeholder="검색어를 입력해 주세요" />
      <hr css={{height: 24, color: hrColor}} />
      <Select id="distance" name="거리순"></Select>
      <Select id="distance" name="동물 선택"></Select>
      <Select id="distance" name="혈액형 선택"></Select>
    </header>
  );
};

export default SearchBar;
