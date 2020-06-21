import {
  questionsForMainSexualityChoice,
  YesNo,
  QuestionTopic,
  initialQuestions,
} from "../../../src/calculators/sexuality/questions";

describe("sexuality - questions", () => {
  describe("initialQuestions", () => {
    it("returns only basic sexual attraction q", () => {
      const questions = initialQuestions();
      expect(questions.length).toBe(1);
      expect(questions[0].id).toBe(QuestionTopic.Allosexual);
    });
  });

  describe("questionsForMainSexualityChoice", () => {
    it("returns allosexual set if answered yes", () => {
      const questions = questionsForMainSexualityChoice({
        [QuestionTopic.Allosexual]: YesNo.Yes,
      });
      expect(questions[0].id).toBe(QuestionTopic.Homosexual);
      expect(questions[1].id).toBe(QuestionTopic.Heterosexual);
    });

    it("returns asexual set if answered yes", () => {
      const questions = questionsForMainSexualityChoice({
        [QuestionTopic.Allosexual]: YesNo.No,
      });
      expect(questions[0].id).toBe(QuestionTopic.Cupiosexual);
      expect(questions[1].id).toBe(QuestionTopic.Lithosexual);
    });

    it("returns gray asexual set if answered sometimes", () => {
      const questions = questionsForMainSexualityChoice({
        [QuestionTopic.Allosexual]: YesNo.Sometimes,
      });
      expect(questions[0].id).toBe(QuestionTopic.Demisexual);
    });
  });
});
