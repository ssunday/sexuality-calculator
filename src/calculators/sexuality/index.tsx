import React from "react";
import RadioQuestion from "components/RadioQuestion";
import Button from "components/Button";
import {
  displayQuestionSet,
  QuestionAnswers,
  initialQuestions,
  Question,
} from "./questions";
import calculate from "./calculate";
import { Sexuality } from "./sexualities";

const SexualityCalculatorComponent = (): JSX.Element => {
  const [answers, setAnswers] = React.useState<QuestionAnswers>();
  const [result, setResult] = React.useState<Sexuality | undefined>();

  const resetCalculator = (): void => {
    setResult(undefined);
    setAnswers(undefined);
  };

  if (result) {
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

  const renderQuestions = (questions: Question[]): JSX.Element[] => {
    return questions.map((question) => {
      const updateAnswers = (value: string): void => {
        if (answers) {
          setAnswers({ ...answers, [question.id]: value });
        } else {
          setAnswers({ [question.id]: value });
        }
      };

      return (
        <div key={question.id}>
          <h3>{question.title}</h3>
          <RadioQuestion
            value={answers ? answers[question.id] : undefined}
            onChange={updateAnswers}
            options={question.options}
          />
        </div>
      );
    });
  };

  return (
    <>
      {renderQuestions(initialQuestions())}
      {answers && renderQuestions(displayQuestionSet(answers))}
      <Button type="submit" onClick={() => setResult(calculate(answers))}>
        Submit
      </Button>
      <Button type="button" onClick={() => resetCalculator()}>
        Reset
      </Button>
    </>
  );
};

export default SexualityCalculatorComponent;
