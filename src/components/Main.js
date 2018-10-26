import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { Route, Switch, withRouter } from "react-router-dom";
import routes from "routes";
import Backdrop from "components/Backdrop";
import NavBar from "components/NavBar";
import { isVisibleMobileSidebar } from "selectors";
import { toggleMobileSidebar } from "actions";
import { flattenRoutes } from "utils";

const StyledMain = styled.article`
  position: relative;
  width: calc(100vw - 300px);
  min-height: 100vh;
  margin-left: 300px;
  padding: 20px 70px 70px;
  transition: 0.2s ease-out;
  @media (max-width: 960px) {
    width: calc(100vw - 200px);
    margin-left: 200px;
    padding: 10px 35px 35px;
  }
  @media (max-width: 600px) {
    margin-left: 0;
    width: 100%;
    padding-top: 60px;
  }
  @media (max-width: 380px) {
    padding: 20px 14px 14px;
  }
`;

class Main extends Component {
  scrollOptions = { behavior: "smooth", block: "start" };
  mainNode = createRef();
  componentDidUpdate(prevProps) {
    const routeHasChanged = this.props.location.key !== prevProps.location.key;
    if (routeHasChanged && !this.props.location.hash) {
      this.scrollTo(this.mainNode.current);
    }
  }
  scrollTo(node) {
    node.scrollIntoView(this.scrollOptions);
  }
  render() {
    const { isVisibleMobileSidebar: show, toggleMobileSidebar } = this.props;
    return (
      <StyledMain ref={this.mainNode}>
        <NavBar show={show} onClick={() => toggleMobileSidebar(!show)} />
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
