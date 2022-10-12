const axios = require('axios');
const fetch = require('node-fetch');

const API = `https://31fd1a6d-964b-4f00-9465-cc26d26c2cf2.mock.pstmn.io/api`;

const getMovies = async () => {
  console.log('F:', fetch);
  const result = await fetch(`${API}/movies`);
  const data = await result.json();
  return data;
};

module.exports = { getMovies };
