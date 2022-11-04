require("dotenv").config();

const greet = (firstName, lastName) => {
  console.log("getFullName:", getFullName);
  return `Hello ${getFullName(firstName, lastName)}`;
};

const getFullName = (firstName, lastName) => {
  return `${firstName} ${lastName}`;
};

const getRandomNumber = () => Math.random();

const getEnvs = () => ({
  API: process.env.API,
});

/*
TODO: 
1. add unit testing to greet() function and mock getFullName fn
2. add unit to getRandomNumber() function and mock Math fn
*/

module.exports = {
  greet,
  getEnvs,
  getFullName,
  getRandomNumber,
};
