import React from "react";
import {HeaderBar} from "components/HeaderBar";
import {SearchBar} from "components/SearchBar";

const LayoutMap = () => {
  return (
    <div
      css={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        minHeight: "100vh",
      }}
    >
      <HeaderBar />
      <SearchBar />
    </div>
  );
};

export default LayoutMap;
