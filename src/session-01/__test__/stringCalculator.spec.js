const { add } = require("../stringCalculator");

describe("# stringCalculator.add", () => {
  it("should return 0 when empty string is sent as parameters", () => {
    const result = add("");
    expect(result).toEqual(0);
  });

  it("should return 1 when '1' is sent as parameters", () => {
    const result = add("1");
    expect(result).toEqual(1);
  });

  it("should return 3 when '1,2' is sent as parameters", () => {
    const result = add("1,2");
    expect(result).toEqual(3);
  });

  it("should return 3 when '1,2,a' is sent as parameters", () => {
    const result = add("1,2,a");
    expect(result).toEqual(3);
  });
  it("should return 3 when '1,2,A,!,@,#,$,%,^,&,*,(,),`,~' is sent as parameters", () => {
    const result = add("1,2,A,!,@,#,$,%,^,&,*,(,),`,~");
    expect(result).toEqual(3);
  });

  it("should return 6 when '1,2/\n3' is sent as parameters", () => {
    const result = add("1,2\n3");
    expect(result).toEqual(6);
  });

  it("should return 6 when '2,/\n3' is sent as parameters", () => {
    const result = add("2,\n3");
    expect(result).toEqual("invalid");
  });

  it("should throw an exception when '1,2,' is sent as parameters", () => {
    expect(() => add("1,2,")).toThrow("unknown");
  });
});
