const { processFile } = require("./async-functions");

describe("#processFile", () => {
  it("should get the size of the file", (done) => {
    const mockedFn = jest.fn();
    //arrange
    const expectedOutput = "1Gb";

    //act
    processFile(mockedFn);

    //assert
    expect(mockedFn).toHaveBeenCalledWith(expectedOutput);
    setTimeout(() => {
      done();
    }, 2000);
  });
});
