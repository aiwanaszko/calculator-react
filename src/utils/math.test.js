import { evaluate, round } from "./math.js";

describe("math.js", () => {
  it("evaluates string equation", () => {
    expect(evaluate("1+2")).toEqual(3);
    expect(evaluate("1+2 - 4")).toEqual(-1);
    expect(evaluate("100+23")).toEqual(123);
    expect(evaluate("324-53+145-23")).toEqual(393);
  });

  it("rounds number correctly", () => {
    expect(round(evaluate(".1+.2"))).toEqual("0.300000");
    expect(round(evaluate(".5-.3"))).toEqual("0.200000");
  });
});
