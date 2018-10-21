import React from "react";
import styled from "styled-components";
import Button from "components/Button";

const StyledPlayground = styled.div`
  position: relative;
  background-color: #eefbfd;
  border-radius: 6px;
  height: 80vh;
`;



export default function Playground({ children }) {
  return (
    <StyledPlayground>
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: '10%' }}>
        <Button controls onClick={() => alert("Hello")}>
          Previous
        </Button>
        <Button controls onClick={() => alert("Hello")}>
          Next
        </Button>
      </div>
      <div style={{ position: 'relative', height: '90%' }}>{children}</div>
    </StyledPlayground>
  );
}
