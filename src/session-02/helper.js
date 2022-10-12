const greet = (firstName, lastName) => {
  return `Hello ${this.getFullName(firstName, lastName)}`;
};

const getFullName = (firstName, lastName) => {
  return `${firstName} ${lastName}`;
};

const getRandomNumber = () => Math.random();

//TODO: add unit testing to greet() function and mock getFullName fn
//TODO: add unit to getRandomNumber() function and mock Math fn

module.exports = {
  greet,
  getFullName,
  getRandomNumber,
};
