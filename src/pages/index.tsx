import React from "react";
import { Link } from "@reach/router";
import { Sexuality } from "../calculators/sexuality/sexuality";

const Index = (): JSX.Element => (
  <div>
    <h1>Discovering your sexuality can be complicated...</h1>
    <h2>But it doesn't have to be</h2>
    <p>
      For those of us still trying to understand ourselves, or have but do not quite have the right term for yourself, trying to dive into the world of sexuality terminology can be daunting. For that reason, I made this{" "} little <Link to="/sexuality-calculator">sexuality 'calculator'</Link> that should
      get you to the right term or give you a possible option set.
    </p>
    <p>
      It is by no means perfect or anything, it was mostly just something I wanted to try to build and learn a few things along the way. And because I wanted the asexual spectrum to become more mainstream.
    </p>
    <h2>Sexualities included in this 'calculator'</h2>
    <p>
      If there are any that need to be added, make a pull
      request/issue here.
    </p>
    <ul>
      {Object.values(Sexuality).map((sexuality, i) => (
        <li key={i}>{sexuality}</li>
      ))}
    </ul>
    <h2>Acknowledgements</h2>
    <p>
      The <a href="https://lgbta.wikia.org/wiki/LGBTA_Wiki">LGBTA Wiki</a> was very helpful, plus an old asexual spectrum graphic using pie as an analogy I had saved that I believe came from someone on Tumblr.
    </p>
  </div>
);

export default Index;
