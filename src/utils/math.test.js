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
    expect(round(evaluate("-.7-.2+.3+.1-.4"))).toEqual(-0.9);
    expect(round(evaluate("-0.365-0.200"))).toEqual(-0.565);
    expect(round(evaluate("-0.85442+0.213435"))).toEqual(-0.640985);
  });
});
