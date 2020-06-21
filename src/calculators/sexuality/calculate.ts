import { Sexuality } from "./sexuality";
import { QuestionTopic, QuestionAnswers, YesNo } from "./questions";

const isYes = (answers: QuestionAnswers, topic: QuestionTopic): boolean => {
  return answers[topic] === YesNo.Yes;
};

const calculate = (answers: QuestionAnswers): Sexuality[] => {
  const possibleAnswers = [];
  if (answers[QuestionTopic.Allosexual] === YesNo.Yes) {
    if (isYes(answers, QuestionTopic.Pansexual)) {
      possibleAnswers.push(Sexuality.Pansexual);
    } else if (
      isYes(answers, QuestionTopic.Homosexual) &&
      isYes(answers, QuestionTopic.Heterosexual)
    ) {
      possibleAnswers.push(Sexuality.Bisexual);
    } else if (isYes(answers, QuestionTopic.Homosexual)) {
      possibleAnswers.push(Sexuality.Homosexual);
    } else if (isYes(answers, QuestionTopic.Heterosexual)) {
      possibleAnswers.push(Sexuality.Heterosexual);
    } else {
      possibleAnswers.push(Sexuality.Allosexual);
    }
  } else if (answers[QuestionTopic.Allosexual] === YesNo.Sometimes) {
    possibleAnswers.push(Sexuality.GrayAsexual);
    if (isYes(answers, QuestionTopic.Demisexual)) {
      possibleAnswers.push(Sexuality.Demisexual);
    }
  } else {
    possibleAnswers.push(Sexuality.Asexual);

    if (isYes(answers, QuestionTopic.Apothisexual)) {
      possibleAnswers.push(Sexuality.Apothisexual);
    }
    if (isYes(answers, QuestionTopic.Autochorisexual)) {
      possibleAnswers.push(Sexuality.Autochorisexual);
    }

    if (isYes(answers, QuestionTopic.Cupiosexual)) {
      possibleAnswers.push(Sexuality.Cupiosexual);
    }
    if (isYes(answers, QuestionTopic.Lithosexual)) {
      possibleAnswers.push(Sexuality.Lithosexual);
    }
  }
  return possibleAnswers;
};

export default calculate;
