import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import CharacterItem from "components/Character/Item";
import Section from "components/Section";
import Playground from "components/Playground";
import { Motion, spring } from "react-motion";
import { getCharacters, getSelected } from "selectors";

const StyledTitle = styled.h2`
  margin-bottom: 3rem;
  font-size: 1.4rem;
  color: rgba(0, 0, 0, 0.825);
`;

function SimpleMotion({ characters, selected }) {
  return (
    <Section id={"motion"}>
      <StyledTitle>{"<Motion />"}</StyledTitle>
      <Playground>
        {characters.map(character => {
          const isSelected = selected.id === character.id;
          return (
            <Motion
              key={character.id}
              defaultStyle={{
                scale: 0.825,
                opacity: 0,
                zIndex: 1
              }}
              style={{
                opacity: spring(isSelected ? 1 : 0),
                scale: spring(isSelected ? 1 : 0.825, { stiffness: 112, damping: 13 }),
                zIndex: isSelected ? 1 : 0
              }}
            >
              {styles => <CharacterItem interpolatedStyles={styles} isSelected={isSelected} character={character} />}
            </Motion>
          );
        })}
      </Playground>
    </Section>
  );
}

const mapStateToProps = state => ({
  selected: getSelected(state),
  characters: getCharacters(state)
});

export default connect(mapStateToProps)(SimpleMotion);
