import { evaluate, round } from "./math.js";

describe("math.js", () => {
  it("evaluates string equation", () => {
    expect(evaluate("1+2")).toEqual(3);
    expect(evaluate("1+2 - 4")).toEqual(-1);
    expect(evaluate("100+23")).toEqual(123);
    expect(evaluate("324-53+145-23")).toEqual(393);
    expect(evaluate("-3")).toEqual(-3);
    expect(evaluate("-3-6")).toEqual(-9);
    expect(evaluate("-5+10-2")).toEqual(3);
    expect(evaluate("---3")).toEqual(NaN);
    expect(evaluate("+++10")).toEqual(NaN);
  });

  it("rounds numbers correctly", () => {
    expect(round(evaluate(".1+.2"))).toEqual(0.3);
    expect(round(evaluate(".5-.3"))).toEqual(0.2);
  });
});
