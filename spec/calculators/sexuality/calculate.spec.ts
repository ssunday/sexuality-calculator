import { YesNo } from "../../../src/calculators/sexuality/questions";
import calculate from "../../../src/calculators/sexuality/calculate";
import { Sexuality } from "../../../src/calculators/sexuality/sexuality";

describe("sexuality - calculate", () => {
  it("returns bisexual if yes to same/opposite", () => {
    const result = calculate({
      [Sexuality.Allosexual]: YesNo.Yes,
      [Sexuality.Homosexual]: YesNo.Yes,
      [Sexuality.Heterosexual]: YesNo.Yes,
    });
    expect(result).toStrictEqual([Sexuality.Bisexual]);
  });

  it("returns homesexual if yes to same but not opposite", () => {
    const result = calculate({
      [Sexuality.Allosexual]: YesNo.Yes,
      [Sexuality.Homosexual]: YesNo.Yes,
      [Sexuality.Heterosexual]: YesNo.No,
    });
    expect(result).toStrictEqual([Sexuality.Homosexual]);
  });

  it("returns allosexual if none of the allosexual triggers are hit", () => {
    const result = calculate({
      [Sexuality.Allosexual]: YesNo.Yes,
    });
    expect(result).toStrictEqual([Sexuality.Allosexual]);
  });

  it("returns grayasexual if none of the grayasexual triggers are hit", () => {
    const result = calculate({
      [Sexuality.Allosexual]: YesNo.Sometimes,
    });
    expect(result).toStrictEqual([Sexuality.GrayAsexual]);
  });

  it("returns demisexual if answered yes", () => {
    const result = calculate({
      [Sexuality.Allosexual]: YesNo.Sometimes,
      [Sexuality.Demisexual]: YesNo.Yes,
    });
    expect(result).toStrictEqual([Sexuality.GrayAsexual, Sexuality.Demisexual]);
  });

  it("returns fraysexual if answered yes", () => {
    const result = calculate({
      [Sexuality.Allosexual]: YesNo.Sometimes,
      [Sexuality.Fraysexual]: YesNo.Yes,
      [Sexuality.Demisexual]: YesNo.Yes,
    });
    expect(result).toStrictEqual([
      Sexuality.GrayAsexual,
      Sexuality.Demisexual,
      Sexuality.Fraysexual,
    ]);
  });

  it("returns pansexual if answered yes", () => {
    const result = calculate({
      [Sexuality.Allosexual]: YesNo.Yes,
      [Sexuality.Homosexual]: YesNo.No,
      [Sexuality.Heterosexual]: YesNo.No,
      [Sexuality.Pansexual]: YesNo.Yes,
    });
    expect(result).toStrictEqual([Sexuality.Pansexual, Sexuality.Allosexual]);
  });

  it("returns pansexual even if bi also yes", () => {
    const result = calculate({
      [Sexuality.Allosexual]: YesNo.Yes,
      [Sexuality.Homosexual]: YesNo.Yes,
      [Sexuality.Heterosexual]: YesNo.Yes,
      [Sexuality.Pansexual]: YesNo.Yes,
    });
    expect(result).toStrictEqual([Sexuality.Pansexual, Sexuality.Bisexual]);
  });

  it("returns cupiosexual if answered yes", () => {
    const result = calculate({
      [Sexuality.Allosexual]: YesNo.No,
      [Sexuality.Cupiosexual]: YesNo.Yes,
    });
    expect(result).toStrictEqual([Sexuality.Asexual, Sexuality.Cupiosexual]);
  });

  it("returns lithosexual if answered yes", () => {
    const result = calculate({
      [Sexuality.Allosexual]: YesNo.No,
      [Sexuality.Cupiosexual]: YesNo.No,
      [Sexuality.Lithosexual]: YesNo.Yes,
    });
    expect(result).toStrictEqual([Sexuality.Asexual, Sexuality.Lithosexual]);
  });

  it("returns apothisexual if answered yes", () => {
    const result = calculate({
      [Sexuality.Allosexual]: YesNo.No,
      [Sexuality.Apothisexual]: YesNo.Yes,
      [Sexuality.Lithosexual]: YesNo.No,
    });
    expect(result).toStrictEqual([Sexuality.Asexual, Sexuality.Apothisexual]);
  });

  it("returns apothisexual and lithosexual if answered yes", () => {
    const result = calculate({
      [Sexuality.Allosexual]: YesNo.No,
      [Sexuality.Apothisexual]: YesNo.Yes,
      [Sexuality.Lithosexual]: YesNo.Yes,
    });
    expect(result).toStrictEqual([
      Sexuality.Asexual,
      Sexuality.Apothisexual,
      Sexuality.Lithosexual,
    ]);
  });

  it("returns asexual if none of the asexual triggers are hit", () => {
    const result = calculate({
      [Sexuality.Allosexual]: YesNo.No,
    });
    expect(result).toStrictEqual([Sexuality.Asexual]);
  });
});
