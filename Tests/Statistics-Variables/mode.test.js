import findMode from "../../Statistics-Variables/mode";
describe("Find mode tests", () => {
  it("simple mode", () => {
    expect(findMode([1, 2, 3, 3, 5])).toBe(3);
  });
});
