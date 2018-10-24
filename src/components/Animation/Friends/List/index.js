import React from "react";
import { CommonContainerStyles, WordingStyles } from "./styles";

export const styles = CommonContainerStyles;

export default function List({ children }) {
  return (
    <>
      <WordingStyles>
        Friends
        <span dangerouslySetInnerHTML={{ __html: "&nbsp" }} />:{" "}
      </WordingStyles>
      <ul
        style={{
          padding: 0,
          margin: 0
        }}
      >
        {children && children()}
      </ul>
    </>
  );
}
