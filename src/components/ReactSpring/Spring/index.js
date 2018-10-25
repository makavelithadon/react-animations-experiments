import React, { Component } from "react";
import styled from "styled-components";
import { styles as AnimationStyles } from "components/Animation/Item/index.js";
import Name, { styles as NameStyles } from "components/Animation/Name/index.js";
/* import { styles as PictureStyles } from "components/Animation/Picture/index.js";
import FriendsList, { styles as FriendsStyles } from "components/Animation/Friends/List/index.js";
import { styles as FriendStyles } from "components/Animation/Friends/Item/index.js"; */
import Section from "components/Section";
import Playground from "containers/Playground";
import withReactSpring from "hocs/withReactSpring";
import { Spring } from "react-spring";
import Button from "components/Button";

const WithReactSpringAnimation = withReactSpring(AnimationStyles)(({ opacity }) => ({ opacity }));

const WithReactSpringName = withReactSpring(NameStyles)(({ color, opacity, x }) => ({
  color,
  opacity,
  transform: `translateX(${x}px)`
}));

const StyledTitle = styled.h2`
  margin-bottom: 3rem;
  font-size: 1.4rem;
  color: rgba(0, 0, 0, 0.825);
`;

class SimpleSpring extends Component {
  state = {
    show: false
  };
  toggle = () => this.setState(prevState => ({ show: !prevState.show }));
  render() {
    const { show } = this.state;
    return (
      <Section id={"spring"}>
        <StyledTitle>{"<Spring />"}</StyledTitle>
        <Playground
          customControls={
            <Button color={"secondary"} type={"outlined"} onClick={this.toggle}>
              Toggle
            </Button>
          }
        >
          {(characters, selected) => (
            <Spring from={{ opacity: 0 }} to={{ opacity: show ? 1 : 0 }}>
              {animationStyles => (
                <WithReactSpringAnimation {...animationStyles}>
                  <Spring
                    from={{
                      opacity: 0,
                      x: 80
                    }}
                    to={{
                      opacity: show ? 1 : 0,
                      x: animationStyles.opacity >= 0.825 ? 0 : animationStyles.opacity > 0 ? -80 : 80
                    }}
                  >
                    {nameStyles => (
                      <WithReactSpringName {...nameStyles} color={selected.color}>
                        <Name name={selected.name} />
                      </WithReactSpringName>
                    )}
                  </Spring>
                </WithReactSpringAnimation>
              )}
            </Spring>
          )}
        </Playground>
      </Section>
    );
  }
}

export default SimpleSpring;
