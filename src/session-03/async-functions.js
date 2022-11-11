const fetch = (url) => {
  return new Promise((resolve, reject) => {
    if (url) resolve("Hello Async");
    else reject("There is no URL");
  });
};

module.exports = {
  fetch,
};
