import React from "react";
import styled from "styled-components";
import { Colors, FontSize } from "../Styles";

export type RadioOption = {
  value: string;
  name: string;
  label: string;
};

type Props = {
  question: string;
  value: string;
  options: RadioOption[];
  onChange: (value: string) => void;
};

const InputWrapper = styled.div`
  border: 3px solid ${Colors.Purple};
  border-radius: 2px;
  padding: 1em 2em 1em 3em;
  margin: 0 0.5em 0 0;

  @media (max-width: 800px) {
    flex: 1;
    margin: 0.25em;
    padding: 1em 0.5em 1em 2em;
  }

  input {
    opacity: 0;
  }

  label {
    display: inline-flex;
    font-size: ${FontSize.Medium};
    font-weight: bold;
  }

  .radio-mark {
    border: 2px solid ${Colors.Purple};
    border-radius: 50%;
    content: "";
    display: inline-block;
    height: 1em;
    left: -100%;
    position: relative;
    width: 1em;
  }

  input:checked ~ .radio-mark:after {
    background-color: ${Colors.Purple};
    border-radius: 50%;
    content: "";
    display: inline-block;
    left: 25%;
    height: 0.5em;
    position: relative;
    top: -25%;
    width: 0.5em;
  }
`;

const QuestionWrapper = styled.div`
  border-bottom: 2px solid ${Colors.Black};
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin: 0 0 1em 0;
  padding: 1em 0;
`;

const QuestionTitle = styled.h3`
  margin: 1em 0 0 0;
`;

const RadioQuestion = (props: Props): JSX.Element => {
  return (
    <>
      <QuestionTitle>{props.question}</QuestionTitle>
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
    </>
  );
};

export default RadioQuestion;
