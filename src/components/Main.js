import React from "react";
import styled from "styled-components";
import { Route, Switch } from "react-router-dom";
import ReactMotion from "./ReactMotion";
import Motion from "./ReactMotion/Motion";
import ReactPose from "./ReactPose";
import ReactSpring from "./ReactSpring";

const StyledMain = styled.article`
  padding: 20px 40px;
`;

export default function Main() {
  return (
    <StyledMain>
      <Switch>
        <Route path="/react-motion" component={ReactMotion} />
        <Route path={"/react-motion/motion"} component={Motion} />
        <Route path="/react-pose" component={ReactPose} />
        <Route path="/react-spring" component={ReactSpring} />
      </Switch>
    </StyledMain>
  );
}
