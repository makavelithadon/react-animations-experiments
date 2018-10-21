import React from "react";
import styled from "styled-components";

const StyledSection = styled.section`
  margin-bottom: 4rem;
`;

export default function Section({ children }) {
  return <StyledSection>{children}</StyledSection>;
}
