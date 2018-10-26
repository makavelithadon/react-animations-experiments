import React, { Component } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import Section from "components/Section";
import Playground from "containers/Playground";
import { styles as AnimationStyles } from "components/Animation/Item/index.js";
import { styles as PictureStyles } from "components/Animation/Picture/index.js";
import Name, { styles as NameStyles } from "components/Animation/Name/index.js";
import { Transition, config } from "react-spring";
import { getSelected } from "selectors";
import withReactSpring from "hocs/withReactSpring";

const WithReactSpringPicture = withReactSpring(PictureStyles)(props => ({
  transform: `scale(${props.scale})`,
  opacity: props.opacity
}));

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
    items: []
  };
  static getDerivedStateFromProps(props) {
    return {
      items: [props.selected]
    };
  }
  render() {
    const { items } = this.state;
    return (
      <Section id={"transition"}>
        <StyledTitle>{"<Transition />"}</StyledTitle>
        <Playground controls>
          <Transition
            items={items}
            keys={item => item.id}
            config={(item, type) => {
              return type === "enter" ? { ...config.gentle } : { ...config.stiffness };
            }}
            from={{
              scale: 0.825,
              opacity: 0,
              zIndex: 0,
              x: 80
            }}
            enter={{
              opacity: 1,
              scale: 1,
              zIndex: 1,
              x: 0
            }}
            leave={{
              scale: 0.825,
              opacity: 0,
              zIndex: 0,
              x: -80
            }}
          >
            {item => props => {
              return (
                <AnimationStyles style={{ display: props.zIndex > 0 ? "flex" : "none" }}>
                  <WithReactSpringPicture {...props} src={item.picture} alt={item.id} />
                  <WithReactSpringName {...props} color={item.color}>
                    <Name name={item.name} />
                  </WithReactSpringName>
                  {
                    <div style={{
                      position: 'absolute',
                      zIndex: 10,
                      color: '#fff',
                      fontWeight: 600,
                      textTransform: 'capitalize',
                      top: '67%',
                      display: 'flex',
                      justifyContent: 'space-around',
                      opacity: props.opacity
                    }}>
                      {
                        item.friends.map(friend => (
                          <div key={friend.id} style={{ transform: `translateY(${props.x/3}px)`, display: 'flex', justifyContent: 'space-between', flexFlow: 'column nowrap', alignItems: 'center', width: '3vw', height: '8vw', margin: '0 2vw', }}>
                            <img src={friend.picture} alt={friend.name} style={{ height: '6vw', width:'auto' }} />
                            <div style={{ opacity: props.opacity, marginRight: 7, display: 'inline-block', color: friend.color }}>{friend.name}</div>
                          </div>
                        ))
                      }
                    </div>
                    
                  }
                </AnimationStyles>
              );
            }}
          </Transition>
        </Playground>
      </Section>
    );
  }
}

const mapStateToProps = state => ({
  selected: getSelected(state)
});

export default connect(mapStateToProps)(SimpleSpring);
