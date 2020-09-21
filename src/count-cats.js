const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  return matrix.reduce((sum, line) => sum + line.filter(item => item == "^^").length, 0);
  // remove line with error and write your code here
};
