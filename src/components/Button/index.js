import React from "react";
import styled from "styled-components";

const StyledControlButton = styled.button`
  border: ${({ color, theme, type }) => {
    if (type === "outlined") {
      return `1px solid ${theme.colors[color] || theme.colors.black}`;
    } else {
      return "1px solid transparent";
    }
  }};
  color: ${({ color, theme, type }) => {
    if (type === "outlined") {
      return theme.colors[color] || theme.colors.black;
    } else {
      return theme.colors.white;
    }
  }}};
  border-radius: 3px;
  background-color: ${({ color, theme, type }) => {
    if (type === "outlined") {
      return theme.colors.white;
    } else {
      return theme.colors[color] || theme.colors.black;
    }
  }};
  padding: 0.8rem 1.4rem;
  text-transform: capitalize;
  outline: 0;
  outline-offset: 0;
  cursor: pointer;
  margin-right: 7px;
  transition: 0.2s ease-out;
  &:hover {
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    color: #fff;
    background-color: ${({ color, theme, type }) => {
      if (type === "outlined") {
        return theme.colors[color] || theme.colors.black;
      }
    }};
  },
`;

export default function Button(props) {
  return (
    <StyledControlButton {...props}>
      <code>{props.children}</code>
    </StyledControlButton>
  );
}

Button.defaultProps = {
  children: "Click me"
};
