import React from "react";
import { Root, Routes } from "react-static";
import { Router } from "@reach/router";
import Layout from "components/Layout";
import { GlobalStyle } from "./Styles";

const App = (): JSX.Element => {
  return (
    <Root>
      <link
        href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro&display=swap"
        rel="stylesheet"
      />
      <GlobalStyle />
      <Layout>
        <React.Suspense fallback={<b>Loading page...</b>}>
          <Router>
            <Routes path="*" />
          </Router>
        </React.Suspense>
      </Layout>
    </Root>
  );
};

export default App;
