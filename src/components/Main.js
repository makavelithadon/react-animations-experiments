import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { Route, Switch, withRouter } from "react-router-dom";
import routes from "routes";
import Backdrop from "components/Backdrop";
import { isVisibleMobileSidebar } from "selectors";
import { toggleMobileSidebar } from "actions";
import { flattenRoutes } from "utils";

const StyledMain = styled.article`
  width: calc(100vw - 300px);
  min-height: 100vh;
  margin-left: 300px;
  padding: 20px 40px 40px;
  transition: 0.2s ease-out;
  @media (max-width: 960px) {
    width: calc(100vw - 200px);
    margin-left: 200px;
    padding: 10px 15px 15px;
  }
  @media (max-width: 600px) {
    margin-left: 0;
    width: 100%;
  }
`;

const StyledToggleButton = styled.button`
  display: none;
  @media (max-width: 600px) {
    display: initial;
  }
`;

function Main({ isVisibleMobileSidebar: show, toggleMobileSidebar }) {
  return (
    <StyledMain>
      <StyledToggleButton onClick={() => toggleMobileSidebar(!show)}>Burger</StyledToggleButton>
      <Backdrop show={show} clicked={() => toggleMobileSidebar(false)} />
      <Switch>
        {routes.reduce(flattenRoutes, []).map(route => (
          <Route exact={route.path === "/"} key={route.path} path={route.path} component={route.component} />
        ))}
      </Switch>
    </StyledMain>
  );
}

const mapStateToProps = state => ({
  isVisibleMobileSidebar: isVisibleMobileSidebar(state)
});

const mapDispatchToProps = dispatch => ({
  toggleMobileSidebar: toggleMobileSidebar(dispatch)
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Main)
);
