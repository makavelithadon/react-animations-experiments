import React from "react";
import styled from "styled-components";

export default posed => Component => {
  const stylesString = Component.componentStyle.rules.reduce((acc, rule) => acc + rule, ``);
  const EnhancedComponent = styled(posed)`
    ${stylesString};
  `;
  return props => <EnhancedComponent {...props} />;
};
