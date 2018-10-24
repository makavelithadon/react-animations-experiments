import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import styled from "styled-components";
import Nav from "./Nav";
import { Link } from "react-router-dom";
import { isVisibleMobileSidebar } from "selectors";
import { toggleMobileSidebar } from "actions";

const StyledCommonSidebar = styled.aside`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  width: 300px;
  height: 100vh;
  padding: 20px;
  background: #fff;
  border-right: 1px solid #f0f0f0;
  z-index: 1;
  transition: 0.2s ease-out;
`;

const StyledSidebar = styled(StyledCommonSidebar)`
  @media (max-width: 960px) {
    width: 200px;
  }
  @media (max-width: 600px) {
    display: none;
  }
`;

const StyledMobileSidebar = styled(StyledCommonSidebar)`
  width: 250px;
  transform: ${({ show }) => `translateX(${show ? 0 : -300}px)`};
  z-index: 100;
  box-shadow: ${({ show }) => (show ? `1px 0 10px rgba(0, 0, 0, 0.2)` : "none")};
  pointer-events: ${({ show }) => (show ? "auto" : "none")};
`;

const StyledNavTitle = styled(Link)`
  margin-top: 0;
  margin-bottom: 40px;
  font-size: 2.5rem;
  font-weight: 400;
  font-family: "Caveat", sans-serif;
  text-decoration: none;
  color: initial;
  transition: 0.225s ease-out;
  &:hover {
    color: deepskyblue;
  }
`;

class Sidebar extends Component {
  render() {
    const { show, toggleMobileSidebar } = this.props;
    return (
      <>
        <StyledSidebar>
          <StyledNavTitle to={"/"} onClick={() => toggleMobileSidebar(false)}>
            <h2>React Animations Experiments</h2>
          </StyledNavTitle>
          <Nav />
        </StyledSidebar>
        <StyledMobileSidebar show={show}>
          <StyledNavTitle to={"/"} onClick={() => toggleMobileSidebar(false)}>
            React Animations Experiments
          </StyledNavTitle>
          <Nav onNavigation={() => toggleMobileSidebar(false)} />
        </StyledMobileSidebar>
      </>
    );
  }
}

const mapStateToProps = state => ({
  show: isVisibleMobileSidebar(state)
});

const mapDispatchToProps = dispatch => ({
  toggleMobileSidebar: toggleMobileSidebar(dispatch)
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Sidebar)
);
