import fibonacciValuesPreventErrors from "../../Numerical-Series/fibonacciValuesPreventErrors";
describe("fibonacciValuesPreventErrors values tests", () => {
  it("test the 5th number", () => {
    expect(fibonacciValuesPreventErrors(5)).toStrictEqual(5);
  });
  it("test send multiple arguments but the first a number", () => {
    expect(fibonacciValuesPreventErrors(5, "", 0)).toBe(5);
  });
  it("test send a string", () => {
    expect(typeof fibonacciValuesPreventErrors("a")).toBe("string");
  });
  it("test send an undefined", () => {
    expect(typeof fibonacciValuesPreventErrors(undefined)).toBe("string");
  });
  it("test send a null", () => {
    expect(typeof fibonacciValuesPreventErrors(null)).toBe("string");
  });
  it("test send infinity", () => {
    expect(typeof fibonacciValuesPreventErrors(Infinity)).toBe("string");
  });
  it("test send the function", () => {
    expect(
      typeof fibonacciValuesPreventErrors(fibonacciValuesPreventErrors())
    ).toBe("string");
  });
  it("test a big number", () => {
    expect(typeof fibonacciValuesPreventErrors(2 ** 53)).toBe("string");
  });
});
