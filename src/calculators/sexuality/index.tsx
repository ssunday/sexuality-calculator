import React from "react";
import styled from "styled-components";
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
import { Colors } from "../../Styles";

const Results = styled.div`
  margin: 2em 0 0 0;
  min-height: 4em;

  div {
    border: 1px solid ${Colors.Black};
    padding: 1em;
  }

  h3 {
    margin: 0;
  }
`;

const SexualityCalculatorComponent = (): JSX.Element => {
  const [answers, setAnswers] = React.useState<QuestionAnswers>();
  const [result, setResult] = React.useState<Sexuality[] | undefined>();

  const resetCalculator = (): void => {
    setResult(undefined);
    setAnswers(undefined);
  };

  const updateAnswers = (question: Question, value: string): void => {
    if (answers) {
      setAnswers({ ...answers, [question.id]: value });
    } else {
      setAnswers({ [question.id]: value });
    }
    setResult(undefined);
  };

  const renderQuestions = (questions: Question[]): JSX.Element[] => {
    return questions.map((question) => {
      return (
        <div key={question.id}>
          <RadioQuestion
            question={question.title}
            value={answers ? answers[question.id] : undefined}
            onChange={(value: string) => updateAnswers(question, value)}
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
        Answer each question to the best of your ability, choosing the most
        applicable response. The results will come in the form of possible
        sexualities, hopefully helping you figure out the right term. Whatever the results, only you can know and decide for certain. This is just to try to help.
      </p>
      <p>
        If you see an issue or have a suggestion, please make a pull request or issue
        on <a href="https://github.com/ssunday/sexuality-calculator">Github</a>.
      </p>
      {renderQuestions(initialQuestions())}
      {renderQuestions(applicableQuestions)}
      <div>
        {allQuestionsAnswered && (
          <Button type="submit" onClick={() => setResult(calculate(answers))}>
            Submit
          </Button>
        )}

        <SecondaryButton type="button" onClick={() => resetCalculator()}>
          Reset
        </SecondaryButton>
      </div>

      <Results>
        {result && (
          <div>
            <h3>You may be {result.join(" or ")}.</h3>
          </div>
        )}
      </Results>
    </>
  );
};

export default SexualityCalculatorComponent;
