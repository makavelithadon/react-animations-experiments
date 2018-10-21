import React from "react";
import { Motion, spring } from "react-motion";
import styled from "styled-components";

const StyledCharacter = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  flex-flow: column wrap;
  justify-content: center;
  align-items: center;
  opacity: ${({ opacity }) => opacity}
  z-index: ${({ zIndex }) => zIndex}
  display: ${({ opacity }) => (opacity > 0 ? "flex" : "none")}
`;

export default function CharacterItem({ interpolatedStyles: styles, isSelected, character }) {
  return (
    <StyledCharacter opacity={styles.opacity} zIndex={styles.zIndex}>
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
        {style => {
          return (
            <h2
              style={{
                zIndex: 0,
                fontSize: "13rem",
                position: "absolute",
                left: "-100%",
                top: "38%",
                marginTop: 0,
                opacity: style.opacity,
                transform: `translateX(${style.x}px)`,
                color: character.color
              }}
            >
              {character.name.charAt(0).toUpperCase() + character.name.slice(1)}
            </h2>
          );
        }}
      </Motion>
      <Motion
        defaultStyle={{
          opacity: 0,
          bottom: -120
        }}
        style={{
          opacity: spring(styles.opacity >= 1 ? 1 : 0),
          bottom: spring(styles.opacity >= 0.5 ? -150 : !isSelected && styles.opacity > 0 ? -180 : -120, {
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
      <img
        src={character.picture}
        alt={character.id}
        style={{
          position: "absolute",
          top: "2rem",
          transform: `scale(${styles.scale})`,
          maxWidth: "75%",
          maxHeight: "58%",
          zIndex: 1
        }}
      />
    </StyledCharacter>
  );
}
