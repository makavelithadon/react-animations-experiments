import React, { Component, createRef } from "react";
import styled from "styled-components";
import Burger from "components/Burger";

const StyledNavBar = styled.header`
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  display: none;
  height: 60px;
  padding: 0 40px;
  background: ${({ theme }) => theme.colors.white};
  border-bottom: ${({ theme }) => `1px solid ${theme.colors.lightGrey}`};
  z-index: 10;
  @media (max-width: 600px) {
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }
  @media (max-width: 960px) {
    padding: 0 15px;
  }
`;

export default function NavBar ({ show, onClick }) {
  return (
    <StyledNavBar>
      <Burger type={"collapse"} isActive={show} onClick={onClick} />
    </StyledNavBar>
  );
}