import React from "react";
import styled from "styled-components";
import Section from "components/Section";

const StyledTitle = styled.h2`
  margin-bottom: 3rem;
  font-size: 1.4rem;
  color: rgba(0, 0, 0, 0.825);
  height: 100vh;
`;

export default function TransitionMotion() {
  return (
    <Section id={"transition-motion"}>
      <StyledTitle>{"<TransitionMotion />"}</StyledTitle>
    </Section>
  );
}
