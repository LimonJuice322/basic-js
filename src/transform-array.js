const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if (!Array.isArray(arr)) throw new Errow('Error');
  let new_arr = new Array();

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == '--discard-next') {
      if (arr[i+2] == '--discard-prev' || arr[i+2] == '--double-prev') i++;
      if (i != arr.length-1) i++;
    } else if (arr[i] == '--discard-prev') {
      if (i != 0) new_arr.pop();
    } else if (arr[i] == '--double-next') {
      if (i != arr.length-1) new_arr.push(arr[i+1]);
    } else if (arr[i] == '--double-prev') {
      if (i != 0) new_arr.push(arr[i-1]);
    } else new_arr.push(arr[i]);
  }
  return new_arr;
  // remove line with error and write your code here
};
