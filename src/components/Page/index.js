import React, { Component } from "react";
import styled, { keyframes } from "styled-components";
import Section from "components/Section";
import { withRouter } from "react-router-dom";

const AnimatedTitleKeyframes = keyframes`
  0% {
    width: 0;
  }
  100% {
    width: 100%;
  }
`;

const StyledTitle = styled.h2`
  display: inline-block;
  position: relative;
  margin-top: 20px;
  margin-bottom: 3.2rem;
  font-size: 3rem;
  color: ${({ theme }) => theme.colors.primary};
  &::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: -8px;
    height: 2px;
    background: ${({ theme }) => theme.colors.secondary};
    animation: ${AnimatedTitleKeyframes} 0.75s forwards ease-out;
  }
`;

class Page extends Component {
  render() {
    const { title, children } = this.props;
    return (
      <div>
        <Section>
          <StyledTitle>{title}</StyledTitle>
          {children}
        </Section>
      </div>
    );
  }
}

export default withRouter(Page);
