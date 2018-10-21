import React from "react";
import styled from "styled-components";
import Section from "./../../Section";

const StyledTitle = styled.h2`
  margin: 6rem 0;
  font-size: 1.4rem;
  color: rgba(0, 0, 0, 0.825);
`;

export default function Motion() {
  return (
    <Section>
      <StyledTitle id={"motion"}>{"<Motion />"}</StyledTitle>
    </Section>
  );
}
