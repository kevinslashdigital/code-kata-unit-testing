const { fizzBuzz } = require("../fizzBuzz");

describe("# fizzBuzz.fizzBuzz", () => {
  it("should return a number as a String when a number is sent as parameters", () => {
    const result = fizzBuzz(1);
    expect(result).toEqual("1");
  });
  it("should return Fizz when 3 is sent as parameters", () => {
    const result = fizzBuzz(3);
    expect(result).toEqual("Fizz");
  });
});
