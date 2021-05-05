import { evaluate } from "./math.js";

describe("math.js", () => {
  it("evaluates string equation", () => {
    expect(evaluate("1+2")).toEqual(3);
    expect(evaluate("1+2 - 4")).toEqual(-1);
    expect(evaluate("100+23")).toEqual(123);
    expect(evaluate("324-53+145-23")).toEqual(393);
    expect(evaluate("-3-3")).toEqual(-6);
  });
});
