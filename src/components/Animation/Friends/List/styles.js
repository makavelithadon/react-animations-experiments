import styled from "styled-components";

export const CommonContainerStyles = styled.div`
  position: absolute;
`;

export const WordingStyles = styled.h2`
  position: absolute;
  transform: translateX(-120%);
  margin-top: 5px;
  text-align: left;
  font-size: 1.2rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.secondary};
`;
