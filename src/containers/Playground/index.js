import React from "react";
import { connect } from "react-redux";
import { goTo } from "actions";
import styled from "styled-components";
import Button from "components/Button";
import { getCharacters, getSelected } from "selectors";

const StyledPlayground = styled.div`
  position: relative;
  background-color: #eefbfd;
  border-radius: 6px;
  height: 80vh;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  border: 1px solid #f0f0f0;
`;

function Playground({ children, characters, selected, goTo }) {
  return (
    <StyledPlayground>
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", flex: 1 }}>
        <Button color={"secondary"} type={"outlined"} controls onClick={() => goTo(characters, selected, "previous")}>
          Previous
        </Button>
        <Button color={"secondary"} type={"outlined"} controls onClick={() => goTo(characters, selected, "next")}>
          Next
        </Button>
      </div>
      <div style={{ position: "relative", flex: 6 }}>{children(characters, selected)}</div>
    </StyledPlayground>
  );
}

const mapStateToProps = state => ({
  characters: getCharacters(state),
  selected: getSelected(state)
});

const mapDispatchToProps = dispatch => ({
  goTo: goTo(dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Playground);
