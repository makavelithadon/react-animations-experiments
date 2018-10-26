import React from "react";
import styled from "styled-components";
import { styles as AnimationStyles } from "components/Animation/Item/index.js";
import Name, { styles as NameStyles } from "components/Animation/Name/index.js";
import { styles as PictureStyles } from "components/Animation/Picture/index.js";
import FriendsList, { styles as FriendsStyles } from "components/Animation/Friends/List/index.js";
import { styles as FriendStyles } from "components/Animation/Friends/Item/index.js";
import Section from "components/Section";
import Playground from "containers/Playground";
import { Motion, spring } from "react-motion";
import withReactMotion from "hocs/withReactMotion";

const WithReactMotionAnimation = withReactMotion(AnimationStyles)(({ opacity, zIndex }) => ({
  opacity,
  display: opacity > 0 ? "flex" : "none",
  zIndex
}));

const WithReactMotionName = withReactMotion(NameStyles)(({ color, opacity, x }) => ({
  color,
  opacity,
  transform: `translateX(${x}px)`
}));

const WithReactMotionPicture = withReactMotion(PictureStyles)(({ scale }) => ({
  transform: `scale(${scale})`
}));

const WithReactMotionFriends = withReactMotion(FriendsStyles)(({ bottom }) => ({ bottom: `${bottom}%` }));

const WithReactMotionFriend = withReactMotion(FriendStyles)(({ color, picture }) => ({
  backgroundImage: `url(${picture})`,
  border: `1px solid ${color}`
}));

const StyledTitle = styled.h2`
  margin-bottom: 3rem;
  font-size: 1.4rem;
  color: rgba(0, 0, 0, 0.825);
`;

function SimpleMotion() {
  return (
    <Section id={"motion"}>
      <StyledTitle>{"<Motion />"}</StyledTitle>
      <Playground controls>
        {(characters, selected) => {
          return characters.map(character => {
            const isSelected = selected.id === character.id;
            return (
              <Motion
                key={character.id}
                defaultStyle={{
                  scale: 0.825,
                  opacity: 0,
                  zIndex: 0
                }}
                style={{
                  opacity: spring(isSelected ? 1 : 0),
                  scale: spring(isSelected ? 1 : 0.825, { stiffness: 112, damping: 13 }),
                  zIndex: isSelected ? 1 : 0
                }}
              >
                {animationStyles => (
                  <WithReactMotionAnimation {...animationStyles}>
                    <Motion
                      defaultStyle={{
                        opacity: 0,
                        x: 80
                      }}
                      style={{
                        opacity: spring(animationStyles.opacity >= 0.5 ? 0.375 : 0),
                        x: spring(
                          animationStyles.opacity >= 0.825 ? 0 : !isSelected && animationStyles.opacity > 0 ? -80 : 80
                        )
                      }}
                    >
                      {nameStyles => (
                        <WithReactMotionName {...nameStyles} color={character.color}>
                          <Name name={character.name} />
                        </WithReactMotionName>
                      )}
                    </Motion>
                    <WithReactMotionPicture src={character.picture} alt={character.id} scale={animationStyles.scale} />
                    <Motion
                      defaultStyle={{
                        opacity: 0,
                        bottom: 14
                      }}
                      style={{
                        opacity: spring(animationStyles.opacity >= 1 ? 1 : 0),
                        bottom: spring(
                          animationStyles.opacity >= 0.5 ? 20 : !isSelected && animationStyles.opacity > 0 ? 14 : 18,
                          {
                            stiffness: 112,
                            damping: 13
                          }
                        )
                      }}
                    >
                      {friendsStyles => (
                        <WithReactMotionFriends {...friendsStyles}>
                          <FriendsList>
                            {() => {
                              return (
                                character.friends &&
                                character.friends.length &&
                                character.friends.map(friend => (
                                  <WithReactMotionFriend
                                    key={friend.id}
                                    picture={friend.picture}
                                    color={friend.color}
                                  />
                                ))
                              );
                            }}
                          </FriendsList>
                        </WithReactMotionFriends>
                      )}
                    </Motion>
                  </WithReactMotionAnimation>
                )}
              </Motion>
            );
          });
        }}
      </Playground>
    </Section>
  );
}

export default SimpleMotion;
