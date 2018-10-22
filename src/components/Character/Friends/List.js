import React from "react";
import styled from "styled-components";
import { Motion, spring } from "react-motion";
import FriendItem from "./Item";

const StyledFriendContainer = styled.div.attrs({
  style: ({ bottom }) => ({
    bottom: `${bottom}%`
  })
})`
  position: absolute;
`;

const StyledFriendsWording = styled.h2`
  text-align: left;
  font-size: 0.9rem;
  font-weight: 300;
`;

export default function List({ friends, isSelected, ...styles }) {
  return (
    <Motion
      defaultStyle={{
        opacity: 0,
        bottom: 14
      }}
      style={{
        opacity: spring(styles.opacity >= 1 ? 1 : 0),
        bottom: spring(styles.opacity >= 0.5 ? 16 : !isSelected && styles.opacity > 0 ? 10 : 14, {
          stiffness: 112,
          damping: 13
        })
      }}
    >
      {style => (
        <StyledFriendContainer bottom={style.bottom}>
          <StyledFriendsWording>Friends : </StyledFriendsWording>
          <ul
            style={{
              padding: 0,
              margin: 0
            }}
          >
            {friends && friends.length && friends.map(friend => <FriendItem key={friend.id} {...friend} />)}
          </ul>
        </StyledFriendContainer>
      )}
    </Motion>
  );
}
