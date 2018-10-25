import React from "react";
import Page from "components/Page/index";
import LibraryPage from "components/Page/Library";

export default function ReactMotion() {
  return (
    <Page title={"React Motion"}>
      <LibraryPage
        description={"A spring that solves your animation problems."}
        repository={{
          url: "https://github.com/chenglou/react-motion",
          author: "https://github.com/chenglou"
        }}
      />
    </Page>
  );
}
