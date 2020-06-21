import React from "react";
import styled from "styled-components";

export type RadioOption = {
  value: string;
  name: string;
  label: string;
};

type Props = {
  value: string;
  options: RadioOption[];
  onChange: (value: string) => void;
};

const RadioOptionInput = styled.input``;

const RadioQuestion = (props: Props): JSX.Element => {
  return (
    <>
      {props.options.map((option) => {
        return (
          <div key={option.name}>
            <RadioOptionInput
              type="radio"
              name={option.name}
              value={option.value}
              checked={props.value == option.value}
              onChange={() => props.onChange(option.value)}
            />
            <label>{option.label}</label>
          </div>
        );
      })}
    </>
  );
};

export default RadioQuestion;
