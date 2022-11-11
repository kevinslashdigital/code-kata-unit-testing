const axios = require("axios");
const path = require("path");
require("dotenv").config({ path: path.resolve("../.env") });

const API = `${process.env.API}/api`;

const getMovies = async () => {
  try {
    const { data } = await axios.get(`${API}/movies`);
    return data;
  } catch (error) {
    return "Something went wrong when getting movies!";
  }
};

const addMovie = async (name) => {
  try {
    const { data } = await axios.post(`${API}/movies`, {
      name,
    });
    return data;
  } catch (error) {
    return "Something went wrong adding movie!";
  }
};

/*
TODO: 
1. add unit testing to getMovies() function and mock axios.get call
  → test case when successfully response
  → test case when error in the response
2. add unit to addMovie() function  and mock axios.post call
  → test case when successfully response
  → test case when error in the response
*/

module.exports = { addMovie, getMovies };
