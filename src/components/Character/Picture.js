import React from "react";
import styled from "styled-components";

const StyledPicture = styled.img.attrs({
  style: ({ scale }) => ({
    transform: `scale(${scale})`
  })
})`
  position: absolute;
  top: 2rem;
  max-width: 75%;
  max-height: 55%;
  z-index: 1;
`;

export default function Picture({ picture, id, scale }) {
  return <StyledPicture src={picture} alt={id} scale={scale} />;
}
