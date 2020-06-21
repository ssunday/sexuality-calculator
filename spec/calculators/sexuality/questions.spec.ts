import { QuestionTopic, initialQuestions } from '../../../src/calculators/sexuality/questions'

describe('sexuality - questions', () => {
  describe('initialQuestions', () => {
    it('returns only basic sexual attraction q', () => {
      const questions = initialQuestions();
      expect(questions.length).toBe(1);
      expect(questions[0].id).toBe(QuestionTopic.Allosexual);
    });
  });
});
