import { Sexuality } from "./sexuality";
import { QuestionAnswers, YesNo } from "./questions";

const isYes = (answers: QuestionAnswers, topic: Sexuality): boolean => {
  return answers[topic] === YesNo.Yes;
};

const addIfYes = (
  answers: QuestionAnswers,
  possibleResults: Sexuality[],
  sexuality: Sexuality
): void => {
  if (isYes(answers, sexuality)) {
    possibleResults.push(sexuality);
  }
};

const calculate = (answers: QuestionAnswers): Sexuality[] => {
  const possibleResults: Sexuality[] = [];

  if (answers[Sexuality.Allosexual] === YesNo.Yes) {
    addIfYes(answers, possibleResults, Sexuality.Pansexual);

    if (
      isYes(answers, Sexuality.Homosexual) &&
      isYes(answers, Sexuality.Heterosexual)
    ) {
      possibleResults.push(Sexuality.Bisexual);
    } else if (isYes(answers, Sexuality.Homosexual)) {
      possibleResults.push(Sexuality.Homosexual);
    } else if (isYes(answers, Sexuality.Heterosexual)) {
      possibleResults.push(Sexuality.Heterosexual);
    } else {
      possibleResults.push(Sexuality.Allosexual);
    }
  } else if (answers[Sexuality.Allosexual] === YesNo.Sometimes) {
    possibleResults.push(Sexuality.GrayAsexual);
    addIfYes(answers, possibleResults, Sexuality.Demisexual);
    addIfYes(answers, possibleResults, Sexuality.Fraysexual);
  } else {
    possibleResults.push(Sexuality.Asexual);

    addIfYes(answers, possibleResults, Sexuality.Apothisexual);
    addIfYes(answers, possibleResults, Sexuality.Autochorisexual);
    addIfYes(answers, possibleResults, Sexuality.Cupiosexual);
    addIfYes(answers, possibleResults, Sexuality.Lithosexual);
  }

  return possibleResults;
};

export default calculate;
