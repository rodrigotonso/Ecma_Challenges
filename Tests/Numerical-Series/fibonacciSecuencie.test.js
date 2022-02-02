import fibonacciSecuencie from "../../Numerical-Series/fibonacciSecuencie";
describe("fibonacciSecuencie values tests", () => {
  it("test the first 5 numbers", () => {
    expect(fibonacciSecuencie(5)).toStrictEqual([0, 1, 1, 2, 3]);
  });
  it("test only one number", () => {
    expect(fibonacciSecuencie(1)).toStrictEqual([0]);
  });
  it("test 50 numbers", () => {
    expect(fibonacciSecuencie(9)).toStrictEqual([0, 1, 1, 2, 3, 5, 8, 13, 21]);
  });
});
