import React from "react";
import styled from "styled-components";
import Nav from "./Nav";

const StyledSidebar = styled.aside`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  width: 300px;
  height: 100vh;
  padding: 20px;
  border-right: 1px solid #f0f0f0;
  transition: 0.2s ease-out;
  @media (max-width: 960px) {
    width: 200px;
  }
`;

const StyledNavTitle = styled.h2`
  margin-top: 0;
  margin-bottom: 40px;
  font-size: 2.5rem;
  font-weight: 400;
  font-family: "Caveat", sans-serif;
`;

export default function Sidebar() {
  return (
    <StyledSidebar>
      <StyledNavTitle>React Animations Experiments</StyledNavTitle>
      <Nav />
    </StyledSidebar>
  );
}
