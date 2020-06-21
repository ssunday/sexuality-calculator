import React from "react";
import { Link } from "@reach/router";
import { Sexuality } from "../calculators/sexuality/sexualities";

const Index = (): JSX.Element => (
  <div>
    <h1>Sexuality is complicated</h1>
    <p>
      Figuring out your sexuality can be hard...and you even if you know
      yourself, you may not know the right term. It is even trickier if you fall
      into the asexuality spectrum. For that reason, I made this{" "}
      <Link to="/sexuality-calculator">sexuality calculator</Link> that should
      get you to the right term. For complete list of sexualities it tries to
      figure out, see below. If there are any that need to be added, make a pull
      request/issue here.
    </p>
    <h2>Sexualities</h2>
    <ul>
      {Object.values(Sexuality).map((sexuality, i) => (
        <li key={i}>{sexuality}</li>
      ))}
    </ul>
    <h2>Contributors</h2>
  </div>
);

export default Index;
