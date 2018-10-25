import React from "react";
import Page from "components/Page/index";
import LibraryPage from "components/Page/Library";

export default function ReactMotion() {
  return (
    <Page title={"react-spring"}>
      <LibraryPage
        description={`
          react-spring is a set of simple, spring-physics based primitives (as in building blocks) that should cover most of your UI related animation needs once plain CSS can't cope any longer. Forget easings, durations, timeouts and so on as you fluidly move data from one state to another. This isn't meant to solve each and every problem but rather to give you tools flexible enough to confidently cast ideas into moving interfaces.
          Our goal is to bridge Christopher Chedeau's animated (which is used in react-native by default) with Cheng Lou's react-motion. Although both are similarily spring-physics based they are still polar opposites. For a more detailed explanation read Why React needed yet another animation library.
        `}
        repository={{
          url: "https://github.com/drcmda/react-spring",
          author: "https://github.com/drcmda"
        }}
      />
    </Page>
  );
}
