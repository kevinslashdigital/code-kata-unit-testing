const add = (strNumber) => {
  if (strNumber == "") return 0;
  if (strNumber == "1") return 1;
  const reg = /([A-Za-z\\\/!@#|$?`~%^\[\]{}&*()._+-])/g;
  const isError = strNumber.slice(-1).includes(",");

  if (isError) throw new Error("unknown");
  const onlyNumber = strNumber.replace(reg, "");
  const split = onlyNumber.split(",");

  const sum = split.reduce((a, c) => {
    if (c == "") return a;
    return parseInt(a) + parseInt(c);
  });
  return sum;
};

module.exports = {
  add,
};
