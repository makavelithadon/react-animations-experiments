import styled from "styled-components";

export default styled.h2`
  z-index: 0;
  font-size: 18vh;
  position: absolute;
  top: 42%;
  margin-top: 0;
  @media (max-width: 960px) {
    font-size: 13vh;
  }
  @media (max-width: 600px) and (orientation: portrait) {
    top: 46%;
    font-size: 18vw;
  }
`;
