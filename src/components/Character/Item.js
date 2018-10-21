import React from "react";
import { Motion, spring } from "react-motion";
import styled from "styled-components";
import Picture from "./Picture";
import Name from "./Name";

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
      <Motion
        defaultStyle={{
          opacity: 0,
          bottom: 100
        }}
        style={{
          opacity: spring(styles.opacity >= 1 ? 1 : 0),
          bottom: spring(styles.opacity >= 0.5 ? 70 : !isSelected && styles.opacity > 0 ? 30 : 100, {
            stiffness: 112,
            damping: 13
          })
        }}
      >
        {style => {
          return (
            <div
              style={{
                position: "absolute",
                bottom: style.bottom
              }}
            >
              <h2
                style={{
                  textAlign: "left",
                  fontSize: ".9rem",
                  fontWeight: 300
                }}
              >
                Friends:{" "}
              </h2>
              <ul
                style={{
                  padding: 0,
                  margin: 0
                }}
              >
                {character.friends &&
                  character.friends.length &&
                  character.friends.map(f => {
                    return (
                      <li
                        key={f.id}
                        style={{
                          width: 28,
                          height: 28,
                          marginRight: 10,
                          border: `1px solid ${f.color}`,
                          display: "inline-block",
                          background: `url(${f.picture}) no-repeat center`,
                          backgroundSize: "cover",
                          borderRadius: "50%",
                          cursor: "pointer"
                        }}
                      />
                    );
                  })}
              </ul>
            </div>
          );
        }}
      </Motion>
      <Picture picture={character.picture} id={character.id} scale={styles.scale} />
    </StyledCharacter>
  );
}
