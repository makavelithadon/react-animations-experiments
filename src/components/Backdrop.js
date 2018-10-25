import React from "react";
import styled from "styled-components";
import { Motion, spring } from "react-motion";

const StyledBackdrop = styled.section.attrs({
  style: ({ opacity, display }) => ({
    opacity,
    display
  })
})`
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  width: 100vw;
  height: 100vh;
  z-index: 50;
  background: rgba(0, 0, 0, 0.35);
`;

const springOptions = { stiffness: 120, damping: 14 };

export default function Backdrop({ show, clicked }) {
  return (
    <Motion
      defaultStyle={{
        opacity: 0
      }}
      style={{
        opacity: spring(show ? 1 : 0, springOptions)
      }}
    >
      {style => <StyledBackdrop {...style} display={style.opacity > 0 ? "block" : "none"} onClick={clicked} />}
    </Motion>
  );
}
