import React from "react";
import { Root, Routes } from "react-static";
import { Link, Router } from "@reach/router";
import { GlobalStyle } from "./Styles";
import Nav from "components/Nav";
import Footer from "components/Footer";

const App = (): JSX.Element => {
  return (
    <Root>
      <link
        href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro&display=swap"
        rel="stylesheet"
      />
      <GlobalStyle />
      <Nav>
        <Link to="/">Home</Link>
        <Link to="/sexuality-calculator">Sexuality Calculator</Link>
      </Nav>
      <div className="container">
        <React.Suspense fallback={<em>Loading...</em>}>
          <Router>
            <Routes path="*" />
          </Router>
        </React.Suspense>
      </div>
      <Footer></Footer>
    </Root>
  );
};

export default App;
