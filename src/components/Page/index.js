import React from "react";
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

function Page({ title, children }) {
  return (
    <>
      <Section>
        <StyledTitle>{title}</StyledTitle>
        {children}
      </Section>
    </>
  );
}

export default withRouter(Page);
