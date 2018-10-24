import React from "react";
import styled, { keyframes } from "styled-components";
import Section from "components/Section";
import routes from "routes";
import { normalizeRoutePath } from "utils";

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
          <span role={"img"} aria-label={"Goto Emoji"}>
            👀
          </span>{" "}
          https://github.com/chenglou/react-motion
        </StyledRepository>
      </Section>
      {routes
        .find(route => normalizeRoutePath(route.path) === normalizeRoutePath(pathname))
        .subRoutes.map(({ component: Component, path }) => (
          <Component key={path} />
        ))}
    </>
  );
}
