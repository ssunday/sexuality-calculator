import { RadioOption } from "components/RadioQuestion";
import { Sexuality } from "./sexuality";

export enum YesNo {
  Yes = "yes",
  No = "no",
  Sometimes = "sometimes",
}

export type QuestionAnswers = Record<string, string>;

export type Question = {
  title: string;
  id: Sexuality;
  options: RadioOption[];
};

export const questionsForMainSexualityChoice = (
  answers: QuestionAnswers
): Question[] => {
  if (answers[Sexuality.Allosexual] === YesNo.Yes) {
    return allosexualQuestions();
  } else if (answers[Sexuality.Allosexual] === YesNo.Sometimes) {
    return grayAceQuestions();
  }
  return asexualQuestions();
};

export const initialQuestions = (): Question[] => {
  return [
    {
      title: "Do you experience physical sexual attraction?",
      id: Sexuality.Allosexual,
      options: yesNoSometimes("allosexual"),
    },
  ];
};

const allosexualQuestions = (): Question[] => {
  return [
    {
      title:
        "Do you experience sexual attraction specifically towards those that identify as your gender?",
      id: Sexuality.Homosexual,
      options: yesNo("homosexual"),
    },
    {
      title:
        "Do you experience sexual attraction specifically towards those that identify as not of your gender?",
      id: Sexuality.Heterosexual,
      options: yesNo("heterosexual"),
    },

    {
      title:
        "Do you experience sexual attraction without limitation (i.e. by gender/sex)?",
      id: Sexuality.Pansexual,
      options: yesNo("pansexual"),
    },
  ];
};

const grayAceQuestions = (): Question[] => {
  return [
    {
      title:
        "Do you experience sexual attraction specifically towards only those that you care deeply about?",
      id: Sexuality.Demisexual,
      options: yesNo("demisexual"),
    },
    {
      title: "Do you experience sexual attraction at first then lose interest?",
      id: Sexuality.Fraysexual,
      options: yesNo("fraysexual"),
    },
  ];
};

const asexualQuestions = (): Question[] => {
  return [
    {
      title:
        "Do you still desire a sexual relationship without any attraction?",
      id: Sexuality.Cupiosexual,
      options: yesNo("cupiosexual"),
    },
    {
      title:
        "Do you experience sexual desire but do not want it reciprocated/acted upon?",
      id: Sexuality.Lithosexual,
      options: yesNo("lithosexual"),
    },
    {
      title: "Are you repulsed by the idea of physically having sex?",
      id: Sexuality.Apothisexual,
      options: yesNo("apothisexual"),
    },
    {
      title:
        "Are you only interested in sex when it is not you or in a 'imaginative' setting (i.e. fantasy scenarios or with characters)?",
      id: Sexuality.Autochorisexual,
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
  return yesNo(id).concat([
    { value: YesNo.Sometimes, name: `${id}_no`, label: "Sometimes" },
  ]);
};
