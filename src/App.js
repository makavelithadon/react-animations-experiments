import React, { Component } from "react";
import styled, { createGlobalStyle } from "styled-components";
import Sidebar from "components/Sidebar";
import Main from "components/Main";

const GlobalStyle = createGlobalStyle`
  html {
    font-size: .625em; /* fallback IE8+ */
    font-size: calc(1em * .625); /* IE9-IE11 math fixing. See http://bit.ly/1g4X0bX */
  }
  body {
    font-size: 1.4em; /* base font-size is equivalent "14px" */
  }
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  },
`;

const StyledApp = styled.main`
  position: relative;
  display: flex;
  width: 100%;
  height: 100vh;
`;

class App extends Component {
  render() {
    return (
      <StyledApp>
        <GlobalStyle />
        <Sidebar />
        <Main />
      </StyledApp>
    );
  }
}

export default App;
