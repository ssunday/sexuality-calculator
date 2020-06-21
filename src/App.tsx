import React from "react";
import { Root, Routes } from "react-static";
import { Link, Router } from "@reach/router";
import { GlobalStyle } from "./Styles";
import Nav from "components/Nav";

const App = (): JSX.Element => {
  return (
    <Root>
      <link href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro&display=swap" rel="stylesheet" />
      <GlobalStyle />
      <Nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </Nav>
      <React.Suspense fallback={<em>Loading...</em>}>
        <Router>
          <Routes path="*" />
        </Router>
      </React.Suspense>
    </Root>
  );
};

export default App;
