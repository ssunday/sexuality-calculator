import React from "react";
import RadioQuestion from "components/RadioQuestion";
import Button from "components/Button";
import { QuestionAnswers, allQuestions } from "./questions";
import calculate from "./calculate";
import { Sexuality } from "./sexualities";

const SexualityCalculatorComponent = (): JSX.Element => {
  const [answers, setAnswers] = React.useState<QuestionAnswers>();
  const [result, setResult] = React.useState<Sexuality | undefined>();

  if (result) {
    const resetCalculator = (): void => {
      setResult(undefined);
      setAnswers(undefined);
    }

    return (
      <>
        <h2>
          You may be {result}. Remember only you can know/decide for certain.
        </h2>

        <Button type="submit" onClick={resetCalculator}>
          Reset
        </Button>
      </>
    );
  }

  return (
    <>
      {allQuestions().map((question) => {
        const updateAnswers = (value: string): void => {
          if (answers) {
            setAnswers({ ...answers, [question.id]: value });
          } else {
            setAnswers({ [question.id]: value });
          }
        };

        return (
          <div key={question.id}>
            <h2>{question.title}</h2>
            <RadioQuestion
              value={answers ? answers[question.id] : undefined}
              onChange={updateAnswers}
              options={question.options}
            />
          </div>
        );
      })}
      <Button type="submit" onClick={() => setResult(calculate())}>
        Submit
      </Button>
    </>
  );
};

export default SexualityCalculatorComponent;
