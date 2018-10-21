import React from "react";
import Motion from "./Motion";
import styled from "styled-components";
import Section from "./../Section";

const StyledTitle = styled.h2`
  margin-bottom: 2.2rem;
  font-size: 1.8rem;
  color: rgba(0, 0, 0, 0.825);
`;

const StyledAbout = styled.p`
  font-size: 1.5rem;
  color: rgba(0, 0, 0, 0.825);
  margin-bottom: 10px;
`;

const StyledRepository = styled.a`
  font-size: 1.4rem;
  text-decoration: none;
  color: rgba(0, 0, 0, 0.7);
  &:hover {
    color: orangered;
  }
`;

export default function ReactMotion({ location: { pathname } }) {
  return (
    <>
      <Section>
        <StyledTitle>React Motion</StyledTitle>
        <StyledAbout>A spring that solves your animation problems.</StyledAbout>
        <StyledRepository target={"_blank"} href={"https://github.com/chenglou/react-motion"}>
          👀 https://github.com/chenglou/react-motion
        </StyledRepository>
      </Section>
      <Motion />
    </>
  );
}
