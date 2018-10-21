import React from "react";
import styled from "styled-components";
import { NavLink, Route } from "react-router-dom";

const StyleList = styled.ul`
  padding: 0;
  margin: 0;
`;

const StyledListItem = styled.li`
  list-style-type: none;
  font-size: 1.6rem;
  margin-top: 7px;
  margin-bottom: 16px;
`;

const StyledCommonLinks = styled(NavLink)`
  display: inline-block;
  padding: 0.2rem 0.425rem;
  cursor: pointer;
  text-decoration: none;
  color: rgba(0, 0, 0, 0.825);
  border-radius: 5px;
  transition: 0.125s ease-out;
  &:hover {
    background-color: #f2f2f2;
  }
`;

const StyledLink = styled(StyledCommonLinks)`
  font-weight: 500;
`;

const StyledSubLink = styled(StyledCommonLinks)`
  font-size: 1.2rem;
`;

export default function Nav() {
  return (
    <>
      <h2>Librairies</h2>
      <nav>
        <StyledListItem>
          <StyledLink to={"/react-motion"}>React-Motion</StyledLink>
          <Route
            path={"/react-motion"}
            render={() => (
              <StyleList>
                <StyledListItem style={{ paddingLeft: 12 }}>
                  <StyledSubLink to={"/react-motion#motion"}>
                    <code>{"<Motion />"}</code>
                  </StyledSubLink>
                </StyledListItem>
              </StyleList>
            )}
          />
        </StyledListItem>
        <StyledListItem>
          <StyledLink to={"/react-pose"}>Pose</StyledLink>
        </StyledListItem>
        <StyledListItem>
          <StyledLink to={"/react-spring"}>React Spring</StyledLink>
        </StyledListItem>
      </nav>
    </>
  );
}
