import React from "react";
import styled from "styled-components";

const StyledFriendItem = styled.li`
  width: 28px;
  height: 28px;
  margin-right: 10px;
  display: inline-block;
  background-image: ${({ picture }) => `url(${picture})`};
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  border-radius: 50%;
  cursor: pointer;
  border: ${({ color }) => `1px solid ${color}`};
`;

export default function Item(props) {
  return <StyledFriendItem {...props} />;
}
