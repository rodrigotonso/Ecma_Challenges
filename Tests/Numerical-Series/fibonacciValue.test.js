import fibonacciValue from "../../Numerical-Series/fibonacciValue";
describe("fibonacciValue values tests", () => {
  it("test the 5th number", () => {
    expect(fibonacciValue(5)).toStrictEqual(5);
  });
  it("test the first number", () => {
    expect(fibonacciValue(1)).toStrictEqual(1);
  });
  it("test the 9th number", () => {
    expect(fibonacciValue(9)).toStrictEqual(34);
  });
  it("test the 50th number", () => {
    expect(fibonacciValue(50)).toStrictEqual(12586269025);
  });
});
