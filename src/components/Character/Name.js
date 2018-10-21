import React from "react";
import styled from "styled-components";

const StyledName = styled.h2.attrs({
  style: ({ color, opacity, x }) => ({
    color,
    opacity,
    transform: `translateX(${x}px)`
  })
})`
  z-index: 0;
  font-size: 13rem;
  position: absolute;
  bottom: 0;
  margin-top: 0;
`;

export default function Name({ name: [first, ...rest], ...styles }) {
  const normalizedName = `${first.toUpperCase()}${rest.join("")}`;
  return <StyledName {...styles}>{normalizedName}</StyledName>;
}
