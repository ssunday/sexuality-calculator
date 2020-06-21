import { RadioOption } from "components/RadioQuestion";

enum QuestionTopic {
  Attraction,
  Enjoy,
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
      id: QuestionTopic.Attraction,
      options: yesNo("attraction"),
    },
    {
      title: "Do you enjoy sex?",
      id: QuestionTopic.Enjoy,
      options: yesNo("enjoy"),
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
