function greet(firstName, lastName) {
  return `Hello ${this.getFullName(firstName, lastName)}`;
}

function getFullName(firstName, lastName) {
  return `${firstName} ${lastName}`;
}

module.exports = {
  greet,
  getFullName,
};
