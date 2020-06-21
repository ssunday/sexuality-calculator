import { RadioOption } from "components/RadioQuestion";

enum QuestionTopic {
  Allosexual,
  Homosexual,
  Heterosexual,
  Demisexual,
  Enjoy,
  Want,
  Apothisexual,
}

enum YesNoNA {
  Yes = "yes",
  No = "no",
  NA = "na",
}

export type QuestionAnswers = Record<number, string>;

type Question = {
  title: string;
  id: QuestionTopic;
  options: RadioOption[];
};

export const allQuestions = (): Question[] => {
  return [
    {
      title: "Do you experience sexual attraction?",
      id: QuestionTopic.Allosexual,
      options: yesNo("allosexual"),
    },
    {
      title:
        "Do you experience sexual attraction towards those that identify as your gender?",
      id: QuestionTopic.Homosexual,
      options: yesNo("homosexual"),
    },
    {
      title:
        "Do you experience sexual attraction towards those that identify as not of your gender?",
      id: QuestionTopic.Heterosexual,
      options: yesNo("heterosexual"),
    },
    {
      title:
        "Do you experience sexual attraction towards only those that you care about?",
      id: QuestionTopic.Demisexual,
      options: yesNo("demisexual"),
    },
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
  ];
};

const yesNo = (id: string): RadioOption[] => {
  return [
    { value: YesNoNA.Yes, name: `${id}_yes`, label: "Yes" },
    { value: YesNoNA.No, name: `${id}_no`, label: "No" },
    { value: YesNoNA.NA, name: `${id}_na`, label: "N/A" },
  ];
};
