import React from "react";
import { Motion, spring } from "react-motion";
import styled from "styled-components";
import Picture from "./Picture";
import Name from "./Name";
import Friends from "./Friends/List";

const StyledCharacter = styled.div.attrs({
  style: ({ opacity, zIndex }) => ({
    opacity,
    zIndex,
    display: opacity > 0 ? "flex" : "none"
  })
})`
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  flex-flow: column wrap;
  justify-content: center;
  align-items: center;
`;

export default function CharacterItem({ interpolatedStyles: styles, isSelected, character }) {
  return (
    <StyledCharacter {...styles}>
      <Motion
        defaultStyle={{
          opacity: 0,
          x: 80
        }}
        style={{
          opacity: spring(styles.opacity >= 0.5 ? 0.125 : 0),
          x: spring(styles.opacity >= 0.825 ? 0 : !isSelected && styles.opacity > 0 ? -80 : 80)
        }}
      >
        {style => <Name name={character.name} {...style} color={character.color} />}
      </Motion>
      <Friends isSelected={isSelected} friends={character.friends} {...styles} />
      <Picture picture={character.picture} id={character.id} scale={styles.scale} />
    </StyledCharacter>
  );
}
