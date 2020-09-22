const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  if (date == null) return 'Unable to determine the time of year!';
  try {
    date.getTime();
    const month = date.getMonth();
    return (month == 11 || month == 0 || month == 1) ? 'winter'
          : (month > 1 && month <= 4) ? 'spring'
          : (month > 4 && month <= 7) ? 'summer' : 'autumn';
  } catch {
    throw new Error('Error!');
  }
  // remove line with error and write your code here
};
