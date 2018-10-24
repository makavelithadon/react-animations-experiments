import styled from "styled-components";

export default styled.li`
  width: 28px;
  height: 28px;
  margin-right: 10px;
  background-color: ${({ theme }) => theme.colors.theme};
  display: inline-block;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  border-radius: 50%;
  cursor: pointer;
`;
