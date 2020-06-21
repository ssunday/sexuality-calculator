import React from "react";
import RadioQuestion from "components/RadioQuestion";
import { QuestionAnswers, allQuestions } from "./questions";

const SexualityCalculatorComponent = (): JSX.Element => {
  const [answers, setAnswers] = React.useState<QuestionAnswers>();

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
    </>
  );
};

export default SexualityCalculatorComponent;
