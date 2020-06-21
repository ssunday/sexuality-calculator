import React from "react";
import RadioQuestion from "components/RadioQuestion";
import { yesNo } from "./questions";

const SexualityCalculatorComponent = (): JSX.Element => {
  return (
    <>
      <h2>Do you experience attraction</h2>
      <RadioQuestion
        onChange={() => {}}
        options={yesNo('attraction')}
      />
    </>
  );
};

export default SexualityCalculatorComponent;
