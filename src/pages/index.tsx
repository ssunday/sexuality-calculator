import React from "react";
import { Link } from "@reach/router";
import { Sexuality } from "../calculators/sexuality/sexuality";

const Index = (): JSX.Element => (
  <div>
    <h1>Discovering your sexuality can be complicated...</h1>
    <h2>But it doesn&apos;t have to be</h2>
    <p>
      For those of us still trying to understand ourselves, or have but do not
      quite have the right term for yourself, trying to dive into the world of
      sexuality terminology can be daunting. For that reason, I made this little{" "}
      <Link to="/sexuality-calculator">sexuality &apos;calculator&apos;</Link>{" "}
      that should help you get to the right term or give you a possible option
      set.
    </p>
    <p>
      It is by no means perfect; it was mostly just something I wanted to try to
      build and learn from. And because I wanted the asexual spectrum to become
      more mainstream. If it actually helps someone, that would be fantastic!
    </p>
    <h2>Sexualities included in this &apos;calculator&apos;</h2>
    <p>
      If there are any that should be added or corrected, make a pull
      request/issue on{" "}
      <a href="https://github.com/ssunday/sexuality-calculator">Github</a>.
    </p>
    <ul>
      {Object.values(Sexuality).map((sexuality, i) => (
        <li key={i}>{sexuality}</li>
      ))}
    </ul>
    <h2>Acknowledgements</h2>
    <p>
      The <a href="https://lgbta.wikia.org/wiki/LGBTA_Wiki">LGBTA Wiki</a> was
      very helpful, plus an old asexual spectrum graphic using pie as an analogy
      I had saved that I believe came from someone on Tumblr.
    </p>
  </div>
);

export default Index;
