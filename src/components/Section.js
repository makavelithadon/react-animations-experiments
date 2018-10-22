import React from "react";
import styled from "styled-components";

const StyledSection = styled.section`
  padding-top: 2rem;
`;

export default function Section({ children, ...restProps }) {
  return <StyledSection {...restProps}>{children}</StyledSection>;
}
