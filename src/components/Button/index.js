import React from "react";
import styled from "styled-components";

const StyledControlButton = styled.button`
  border: ${props => `1px solid ${props.primary ? "deepskyblue" : "#acacac"};`}
  color: ${props => (props.primary ? "deepskyblue" : "#acacac")}
  border-radius: 3px;
  background-color: #fff;
  padding: 0.9rem 1.4rem;
  text-transform: capitalize;
  outline: 0;
  outline-offset: 0;
  cursor: pointer;
  margin-right: 7px;
  transition: 0.2s ease-out;
  &:hover {
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    color: #fff;
    background-color: deepskyblue;
  }
`;

export default function Button(props) {
  if (props.controls) {
    return (
      <StyledControlButton {...props}>
        <code>{props.children}</code>
      </StyledControlButton>
    );
  }
  return (
    <button {...props}>
      <code>{props.children}</code>
    </button>
  );
}

Button.defaultProps = {
  children: "Click me"
};
