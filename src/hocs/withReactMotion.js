import React from "react";
import styled from "styled-components";

export default StyledComponent => style => {
  const EnhancedComponent = styled(StyledComponent).attrs({
    style
  })``;
  return props => <EnhancedComponent {...props}>{props.children && props.children}</EnhancedComponent>;
};
