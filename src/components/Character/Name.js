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
  font-size: 18vh;
  position: absolute;
  top: 42%;
  margin-top: 0;
  @media (max-width: 960px) {
    font-size: 13vh;
  }
  @media (max-width: 600px) and (orientation: portrait) {
    top: 46%;
    font-size: 18vw;
  }
`;

export default function Name({ name: [first, ...rest], ...styles }) {
  const normalizedName = `${first.toUpperCase()}${rest.join("")}`;
  return <StyledName {...styles}>{normalizedName}</StyledName>;
}
