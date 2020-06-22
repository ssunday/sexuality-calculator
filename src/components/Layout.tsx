import React from "react";
import { Link } from "@reach/router";
import Nav from "components/Nav";
import Footer from "components/Footer";

const Layout = ({ children }: { children: JSX.Element }): JSX.Element => {
  return (
    <>
      <Nav>
        <Link to="/">Home</Link>
        <Link to="/sexuality-calculator">Sexuality Calculator</Link>
      </Nav>
      <div className="container">{children}</div>
      <Footer>
        <p>Built by <a href="https://sasunday.com">Sarah Sunday</a></p>
        <p><a href="https://github.com/ssunday/sexuality-calculator">Code on Github</a></p>
      </Footer>
    </>
  );
};

export default Layout;
