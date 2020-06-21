import React from "react";
import styled from "styled-components";
import { COLORS, FONT_SIZE } from "../Styles";

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

const InputWrapper = styled.div`
  border: 2px solid ${COLORS.PURPLE};
  border-radius: 2px;
  padding: 1em 4em;
  margin: 0.5em;

  input {
    opacity: 0;
  }

  label {
    display: inline-flex;
    font-size: ${FONT_SIZE.Normal};
  }

  .radio-mark {
    background-color: ${COLORS.PURPLE};
    border-radius: 50%;
    content: "";
    display: inline-block;
    height: 2em;
    left: -100%;
    position: relative;
    width: 2em;
  }

  input:checked ~ .radio-mark:after {
    background-color: ${COLORS.WHITE};
    border-radius: 50%;
    content: "";
    display: inline-block;
    left: 25%;
    height: 1em;
    position: relative;
    top: 25%;
    width: 1em;
  }
`;

const QuestionWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

const RadioQuestion = (props: Props): JSX.Element => {
  return (
    <QuestionWrapper>
      {props.options.map((option) => {
        return (
          <InputWrapper key={option.name}>
            <label>
              <input
                type="radio"
                name={option.name}
                value={option.value}
                checked={props.value == option.value}
                onChange={() => props.onChange(option.value)}
              />
              {option.label}
              <span className="radio-mark" />
            </label>
          </InputWrapper>
        );
      })}
    </QuestionWrapper>
  );
};

export default RadioQuestion;
