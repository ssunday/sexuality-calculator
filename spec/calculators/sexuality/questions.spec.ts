import {
  questionsForMainSexualityChoice,
  YesNo,
  initialQuestions,
} from "../../../src/calculators/sexuality/questions";
import { Sexuality } from "../../../src/calculators/sexuality/sexuality";

describe("sexuality - questions", () => {
  describe("initialQuestions", () => {
    it("returns only basic sexual attraction q", () => {
      const questions = initialQuestions();
      expect(questions.length).toBe(1);
      expect(questions[0].id).toBe(Sexuality.Allosexual);
    });
  });

  describe("questionsForMainSexualityChoice", () => {
    it("returns allosexual set if answered yes", () => {
      const questions = questionsForMainSexualityChoice({
        [Sexuality.Allosexual]: YesNo.Yes,
      });
      expect(questions[0].id).toBe(Sexuality.Homosexual);
      expect(questions[1].id).toBe(Sexuality.Heterosexual);
    });

    it("returns asexual set if answered yes", () => {
      const questions = questionsForMainSexualityChoice({
        [Sexuality.Allosexual]: YesNo.No,
      });
      expect(questions[0].id).toBe(Sexuality.Cupiosexual);
      expect(questions[1].id).toBe(Sexuality.Lithosexual);
    });

    it("returns gray asexual set if answered sometimes", () => {
      const questions = questionsForMainSexualityChoice({
        [Sexuality.Allosexual]: YesNo.Sometimes,
      });
      expect(questions[0].id).toBe(Sexuality.Demisexual);
    });
  });
});
