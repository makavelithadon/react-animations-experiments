import React, { Component, createRef } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { Route, Switch, withRouter } from "react-router-dom";
import routes from "routes";
import Backdrop from "components/Backdrop";
import Burger from "components/Burger";
import { isVisibleMobileSidebar } from "selectors";
import { toggleMobileSidebar } from "actions";
import { flattenRoutes } from "utils";

const StyledMain = styled.article`
  position: relative;
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
    padding-top: 60px;
  }
`;

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
  z-index: 1;
  @media (max-width: 600px) {
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }
  @media (max-width: 960px) {
    padding: 0 15px;
  }
`;

class Main extends Component {
  mainNode = createRef();
  componentDidUpdate(prevProps) {
    const routeHasChanged = this.props.location.key !== prevProps.location.key;
    if (routeHasChanged && !this.props.location.hash) {
      this.mainNode.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }
  render() {
    const { isVisibleMobileSidebar: show, toggleMobileSidebar } = this.props;
    return (
      <StyledMain ref={this.mainNode}>
        <StyledNavBar>
          <Burger type={"collapse"} isActive={show} onClick={() => toggleMobileSidebar(!show)} />
        </StyledNavBar>
        <Backdrop show={show} clicked={() => toggleMobileSidebar(false)} />
        <Switch>
          {routes.reduce(flattenRoutes, []).map(route => (
            <Route exact={route.path === "/"} key={route.path} path={route.path} component={route.component} />
          ))}
        </Switch>
      </StyledMain>
    );
  }
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
