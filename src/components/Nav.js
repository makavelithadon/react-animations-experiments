import React from "react";
import styled from "styled-components";
import { Route } from "react-router-dom";
import { NavHashLink as NavLink } from "react-router-hash-link";
import routes from "routes";

const StyleList = styled.ul`
  padding: 0;
  margin: 0;
`;

const StyledCommonListItems = styled.li`
  margin-top: 7px;
  list-style-type: none;
`;

const StyledListItem = styled(StyledCommonListItems)`
  margin-top: 7px;
`;

const StyledSubListItem = styled(StyledCommonListItems)`
  margin-bottom: 7px;
`;

const StyledCommonLinks = styled(NavLink)`
  display: inline-block;
  padding: 0.2rem 0.425rem;
  cursor: pointer;
  text-decoration: none;
  color: rgba(0, 0, 0, 0.825);
  border-radius: 5px;
  transition: 0.125s ease-out;
  &:hover:not(.active) {
    background-color: #f2f2f2;
  }
`;

const StyledLink = styled(StyledCommonLinks)`
  font-size: 1.6rem;
  font-weight: 500;
  &.active {
    color: deepskyblue;
  }
`;

const StyledSubLink = styled(StyledCommonLinks)`
  font-size: 1.2rem;
`;

export default function Nav() {
  return (
    <>
      <h2>Librairies</h2>
      <nav>
        {routes.filter(route => route.path !== "/").map(route => (
          <StyledListItem key={route.path}>
            <StyledLink to={route.path}>{route.name}</StyledLink>
            {route.subRoutes &&
              route.subRoutes.length && (
                <Route
                  path={route.path}
                  render={() =>
                    route.subRoutes.map(subRoute => (
                      <StyleList key={subRoute.path}>
                        <StyledSubListItem style={{ paddingLeft: 12 }}>
                          <StyledSubLink smooth to={subRoute.path}>
                            <code>{subRoute.name}</code>
                          </StyledSubLink>
                        </StyledSubListItem>
                      </StyleList>
                    ))
                  }
                />
              )}
          </StyledListItem>
        ))}
      </nav>
    </>
  );
}
