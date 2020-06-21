import { Sexuality } from "./sexualities";
import { QuestionTopic, QuestionAnswers, YesNo } from "./questions";

const isYes = (answers: QuestionAnswers, topic: QuestionTopic): boolean => {
  return answers[topic] === YesNo.Yes;
};

const calculate = (answers: QuestionAnswers): Sexuality => {
  if (answers[QuestionTopic.Allosexual] === YesNo.Yes) {
    if (isYes(answers, QuestionTopic.Pansexual)) {
      return Sexuality.Pansexual;
    } else if (
      isYes(answers, QuestionTopic.Homosexual) &&
      isYes(answers, QuestionTopic.Heterosexual)
    ) {
      return Sexuality.Bisexual;
    } else if (isYes(answers, QuestionTopic.Homosexual)) {
      return Sexuality.Homosexual;
    } else if (isYes(answers, QuestionTopic.Heterosexual)) {
      return Sexuality.Heterosexual;
    } else if (isYes(answers, QuestionTopic.Demisexual)) {
      return Sexuality.Demisexual;
    }
    return Sexuality.Allosexual;
  }

  if (isYes(answers, QuestionTopic.Apothisexual)) {
    return Sexuality.Apothisexual;
  } else if (isYes(answers, QuestionTopic.Autochorisexual)) {
    return Sexuality.Autochorisexual;
  }
  return Sexuality.Asexual;
};

export default calculate;
