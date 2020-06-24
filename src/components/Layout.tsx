import React from "react";
import { Head } from "react-static";
import { Link } from "@reach/router";
import Nav from "components/Nav";
import Footer from "components/Footer";

const Layout = ({ children }: { children: JSX.Element }): JSX.Element => {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Sexuality Calculator</title>
        <meta
          name="description"
          content="Little quiz to help figure out the terms for your sexuality. Includes ace-spectrum."
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Nav>
        <Link to="/">Home</Link>
        <Link to="/sexuality-calculator">Sexuality Calculator</Link>
      </Nav>
      <div className="container">{children}</div>
      <Footer>
        <p>
          Built by <a href="https://sasunday.com">Sarah Sunday</a>
        </p>
        <p>
          <a href="https://github.com/ssunday/sexuality-calculator">
            Code on Github
          </a>
        </p>
      </Footer>
    </>
  );
};

export default Layout;
