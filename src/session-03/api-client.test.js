const axios = require("axios");

const { getMovies, addMovie } = require("./api-client");

jest.mock("axios");
jest.mock("../session-02/helper.js", () => ({
  getEnvs: jest.fn().mockReturnValue({ API: "url" }),
}));

describe("# getMovies", () => {
  it("should return users list when axios response is successfully", async () => {
    // Your code here...
  });

  it("should return error  when there is one error in the endpoint request", async () => {
    // Your code here...
  });
});
