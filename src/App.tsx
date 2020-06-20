import React from "react";
import { Root, Routes } from "react-static";
import { Link, Router } from "@reach/router";
import "./app.css";

const App = (): JSX.Element => {
  return (
    <Root>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </nav>
      <React.Suspense fallback={<em>Loading...</em>}>
        <Router>
          <Routes path="*" />
        </Router>
      </React.Suspense>
    </Root>
  );
};

export default App;
