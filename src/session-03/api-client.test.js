const axios = require("axios");

const { getMovies } = require("./api-client");

jest.mock("axios");
jest.mock("./helper.js", () => ({
  getEnvs: jest.fn().mockReturnValue({ API: "url" }),
}));

describe("# getMovies", () => {
  it("should return users list when axios response is successfully", async () => {
    // arrange
    const body = {
      data: [
        { id: 1, name: "movie 01" },
        { id: 2, name: "movie 02" },
      ],
    };
    axios.get.mockResolvedValueOnce(body);

    // act
    const result = await getMovies();

    // assert
    expect(axios.get).toHaveBeenCalledWith(`url/api/movies`);
    expect(result).toEqual(body.data);
  });

  it("should return empty users when there is one error in the endpoint request", async () => {
    // arrange
    const message = "Network Error";
    axios.get.mockRejectedValueOnce(message);

    // act
    const result = await getMovies();

    // assert
    expect(axios.get).toHaveBeenCalledWith(`url/api/movies`);
    expect(result).toEqual([]);
  });
});
