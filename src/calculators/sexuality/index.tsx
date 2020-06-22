import React from "react";
import RadioQuestion from "components/RadioQuestion";
import { Button, SecondaryButton } from "components/Button";
import {
  questionsForMainSexualityChoice,
  QuestionAnswers,
  initialQuestions,
  Question,
} from "./questions";
import calculate from "./calculate";
import { Sexuality } from "./sexuality";

const SexualityCalculatorComponent = (): JSX.Element => {
  const [answers, setAnswers] = React.useState<QuestionAnswers>();
  const [result, setResult] = React.useState<Sexuality[] | undefined>();

  const resetCalculator = (): void => {
    setResult(undefined);
    setAnswers(undefined);
  };

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
          <RadioQuestion
            question={question.title}
            value={answers ? answers[question.id] : undefined}
            onChange={updateAnswers}
            options={question.options}
          />
        </div>
      );
    });
  };

  const applicableQuestions = answers
    ? questionsForMainSexualityChoice(answers)
    : [];
  const allQuestionsAnswered =
    answers && applicableQuestions.every((q) => answers[q.id]);

  return (
    <>
      <p>
        Answer each question you can to the best of your ability, choosing the most applicable response. The results will come in the form of any possible sexuality that matches your responses.
      </p>
      <p>
        Whatever the results, only you can know and decide for certain. This is
        just to help.
      </p>
      {renderQuestions(initialQuestions())}
      {renderQuestions(applicableQuestions)}
      {allQuestionsAnswered && (
        <Button type="submit" onClick={() => setResult(calculate(answers))}>
          Submit
        </Button>
      )}

      {result && <h2>You may be {result.join(" or ")}.</h2>}

      <SecondaryButton type="button" onClick={() => resetCalculator()}>
        Reset
      </SecondaryButton>
    </>
  );
};

export default SexualityCalculatorComponent;
