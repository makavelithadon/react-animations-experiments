import React from "react";
import styled from "styled-components";
import { Route, Switch } from "react-router-dom";
import routes from "routes";

const StyledMain = styled.article`
  width: calc(100vw - 300px);
  margin-left: 300px;
  padding: 20px 40px;
  transition: 0.2s ease-out;
  @media (max-width: 960px) {
    width: calc(100vw - 200px);
    margin-left: 200px;
  }
`;

const flattenRoutes = (acc, route) =>
  route.subRoutes && route.subRoutes.length ? [...acc, route, ...route.subRoutes] : [...acc, route];

export default function Main() {
  return (
    <StyledMain>
      <Switch>
        {routes.reduce(flattenRoutes, []).map(route => (
          <Route key={route.path} path={route.path} component={route.component} />
        ))}
      </Switch>
    </StyledMain>
  );
}
