import { RadioOption } from "components/RadioQuestion";

export enum QuestionTopic {
  Allosexual,
  Homosexual,
  Heterosexual,
  Demisexual,
  Pansexual,
  Enjoy,
  Want,
  Apothisexual,
  Autochorisexual,
}

export enum YesNo {
  Yes = "yes",
  No = "no",
}

export type QuestionAnswers = Record<number, string>;

export type Question = {
  title: string;
  id: QuestionTopic;
  options: RadioOption[];
};

export const displayQuestionSet = (answers: QuestionAnswers): Question[] => {
  if (answers[QuestionTopic.Allosexual] === YesNo.Yes) {
    return allosexualQuestions();
  }
  return asexualQuestions();
};

const allosexualQuestions = (): Question[] => {
  return [
    {
      title:
        "Do you experience sexual attraction specifically towards those that identify as your gender?",
      id: QuestionTopic.Homosexual,
      options: yesNo("homosexual"),
    },
    {
      title:
        "Do you experience sexual attraction specifically towards those that identify as not of your gender?",
      id: QuestionTopic.Heterosexual,
      options: yesNo("heterosexual"),
    },
    {
      title:
        "Do you experience sexual attraction specifically towards only those that you care about?",
      id: QuestionTopic.Demisexual,
      options: yesNo("demisexual"),
    },
    {
      title:
        "Do you experience sexual attraction without limitation (i.e. by gender/sex)?",
      id: QuestionTopic.Pansexual,
      options: yesNo("pansexual"),
    },
  ];
};

const asexualQuestions = (): Question[] => {
  return [
    {
      title: "Do you enjoy sex (if you have had it)?",
      id: QuestionTopic.Enjoy,
      options: yesNo("enjoy"),
    },
    {
      title: "Do you theoretically want sex?",
      id: QuestionTopic.Want,
      options: yesNo("want"),
    },
    {
      title: "Are you repulsed by the idea of physically having sex?",
      id: QuestionTopic.Apothisexual,
      options: yesNo("apothisexual"),
    },
    {
      title:
        "Are you only interested in sex when it is not you or in a 'imaginative' setting?",
      id: QuestionTopic.Autochorisexual,
      options: yesNo("autochorisexual"),
    },
  ];
};

export const initialQuestions = (): Question[] => {
  return [
    {
      title: "Do you experience sexual attraction and want sex?",
      id: QuestionTopic.Allosexual,
      options: yesNo("allosexual"),
    },
  ];
};

const yesNo = (id: string): RadioOption[] => {
  return [
    { value: YesNo.Yes, name: `${id}_yes`, label: "Yes" },
    { value: YesNo.No, name: `${id}_no`, label: "No" },
  ];
};
