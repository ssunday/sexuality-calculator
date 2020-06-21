import React from "react";
import styled from 'styled-components';

export type RadioOption = {
  value: string;
  name: string;
  label: string;
};

type Props = {
  options: RadioOption[];
  onChange: (value: string) => void;
};

const RadioOptionInput = styled.input``;

const RadioQuestion = (props: Props): JSX.Element => {
  return (
    <>
      {props.options.map((option) => {
         return (
           <>
             <RadioOptionInput type="radio" name={option.name} value={option.value} />
             <label>{option.label}</label>
           </>
         );
      })}
    </>
  );
};

export default RadioQuestion;
