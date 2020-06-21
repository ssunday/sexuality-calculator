import { RadioOption } from "components/RadioQuestion";

export enum QuestionTopic {
  Allosexual,
  Homosexual,
  Heterosexual,
  Demisexual,
  Pansexual,
  Enjoy,
  Want,
  Cupiosexual,
  Lithosexual,
  Apothisexual,
  Autochorisexual,
}

export enum YesNo {
  Yes = "yes",
  No = "no",
  Sometimes = "sometimes",
}

export type QuestionAnswers = Record<number, string>;

export type Question = {
  title: string;
  id: QuestionTopic;
  options: RadioOption[];
};

export const questionsForMainSexualityChoice = (
  answers: QuestionAnswers
): Question[] => {
  if (answers[QuestionTopic.Allosexual] === YesNo.Yes) {
    return allosexualQuestions();
  } else if (answers[QuestionTopic.Allosexual] === YesNo.Sometimes) {
    return grayAceQuestions();
  }
  return asexualQuestions();
};

export const initialQuestions = (): Question[] => {
  return [
    {
      title:
        "Do you experience physical sexual attraction and want sex of any forms?",
      id: QuestionTopic.Allosexual,
      options: yesNoSometimes("allosexual"),
    },
  ];
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
        "Do you experience sexual attraction without limitation (i.e. by gender/sex)?",
      id: QuestionTopic.Pansexual,
      options: yesNo("pansexual"),
    },
  ];
};

const grayAceQuestions = (): Question[] => {
  return [
    {
      title:
        "Do you experience sexual attraction specifically towards only those that you care about?",
      id: QuestionTopic.Demisexual,
      options: yesNo("demisexual"),
    },
  ];
};

const asexualQuestions = (): Question[] => {
  return [
    {
      title: "Do you still desire a sexual relationship?",
      id: QuestionTopic.Cupiosexual,
      options: yesNo("cupiosexual"),
    },
    {
      title:
        "Do you experience sexual attraction but do not want it reciprocated/acted upon?",
      id: QuestionTopic.Lithosexual,
      options: yesNo("lithosexual"),
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

const yesNo = (id: string): RadioOption[] => {
  return [
    { value: YesNo.Yes, name: `${id}_yes`, label: "Yes" },
    { value: YesNo.No, name: `${id}_no`, label: "No" },
  ];
};

const yesNoSometimes = (id: string): RadioOption[] => {
  return [
    { value: YesNo.Yes, name: `${id}_yes`, label: "Yes" },
    { value: YesNo.No, name: `${id}_no`, label: "No" },
    { value: YesNo.Sometimes, name: `${id}_no`, label: "Sometimes" },
  ];
};
