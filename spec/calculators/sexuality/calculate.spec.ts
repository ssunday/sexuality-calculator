import {
  YesNo,
  QuestionTopic,
} from "../../../src/calculators/sexuality/questions";
import calculate from "../../../src/calculators/sexuality/calculate";
import { Sexuality } from "../../../src/calculators/sexuality/sexuality";

describe("sexuality - calculate", () => {
  it("returns bisexual if yes to same/opposite", () => {
    const result = calculate({
      [QuestionTopic.Allosexual]: YesNo.Yes,
      [QuestionTopic.Homosexual]: YesNo.Yes,
      [QuestionTopic.Heterosexual]: YesNo.Yes,
    });
    expect(result).toStrictEqual([Sexuality.Bisexual]);
  });

  it("returns homesexual if yes to same but not opposite", () => {
    const result = calculate({
      [QuestionTopic.Allosexual]: YesNo.Yes,
      [QuestionTopic.Homosexual]: YesNo.Yes,
      [QuestionTopic.Heterosexual]: YesNo.No,
    });
    expect(result).toStrictEqual([Sexuality.Homosexual]);
  });

  it("returns allosexual if none of the allosexual triggers are hit", () => {
    const result = calculate({
      [QuestionTopic.Allosexual]: YesNo.Yes,
    });
    expect(result).toStrictEqual([Sexuality.Allosexual]);
  });

  it("returns grayasexual if none of the grayasexual triggers are hit", () => {
    const result = calculate({
      [QuestionTopic.Allosexual]: YesNo.Sometimes,
    });
    expect(result).toStrictEqual([Sexuality.GrayAsexual]);
  });

  it("returns demisexual if answered yes", () => {
    const result = calculate({
      [QuestionTopic.Allosexual]: YesNo.Sometimes,
      [QuestionTopic.Demisexual]: YesNo.Yes,
    });
    expect(result).toStrictEqual([Sexuality.GrayAsexual, Sexuality.Demisexual]);
  });

  it("returns pansexual if answered yes", () => {
    const result = calculate({
      [QuestionTopic.Allosexual]: YesNo.Yes,
      [QuestionTopic.Homosexual]: YesNo.No,
      [QuestionTopic.Heterosexual]: YesNo.No,
      [QuestionTopic.Pansexual]: YesNo.Yes,
    });
    expect(result).toStrictEqual([Sexuality.Pansexual]);
  });

  it("returns pansexual even if bi also yes", () => {
    const result = calculate({
      [QuestionTopic.Allosexual]: YesNo.Yes,
      [QuestionTopic.Homosexual]: YesNo.Yes,
      [QuestionTopic.Heterosexual]: YesNo.Yes,
      [QuestionTopic.Pansexual]: YesNo.Yes,
    });
    expect(result).toStrictEqual([Sexuality.Pansexual]);
  });

  it("returns cupiosexual if answered yes", () => {
    const result = calculate({
      [QuestionTopic.Allosexual]: YesNo.No,
      [QuestionTopic.Cupiosexual]: YesNo.Yes,
    });
    expect(result).toStrictEqual([Sexuality.Asexual, Sexuality.Cupiosexual]);
  });

  it("returns lithosexual if answered yes", () => {
    const result = calculate({
      [QuestionTopic.Allosexual]: YesNo.No,
      [QuestionTopic.Cupiosexual]: YesNo.No,
      [QuestionTopic.Lithosexual]: YesNo.Yes,
    });
    expect(result).toStrictEqual([Sexuality.Asexual, Sexuality.Lithosexual]);
  });

  it("returns apothisexual if answered yes", () => {
    const result = calculate({
      [QuestionTopic.Allosexual]: YesNo.No,
      [QuestionTopic.Apothisexual]: YesNo.Yes,
      [QuestionTopic.Lithosexual]: YesNo.No,
    });
    expect(result).toStrictEqual([Sexuality.Asexual, Sexuality.Apothisexual]);
  });

  it("returns apothisexual and lithosexual if answered yes", () => {
    const result = calculate({
      [QuestionTopic.Allosexual]: YesNo.No,
      [QuestionTopic.Apothisexual]: YesNo.Yes,
      [QuestionTopic.Lithosexual]: YesNo.Yes,
    });
    expect(result).toStrictEqual([Sexuality.Asexual, Sexuality.Apothisexual, Sexuality.Lithosexual]);
  });

  it("returns asexual if none of the asexual triggers are hit", () => {
    const result = calculate({
      [QuestionTopic.Allosexual]: YesNo.No,
    });
    expect(result).toStrictEqual([Sexuality.Asexual]);
  });
});
