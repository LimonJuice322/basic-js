const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options = 0) {
  if (!options.hasOwnProperty('separator')) options.separator = '+';
  if (!options.hasOwnProperty('additionSeparator')) options.additionSeparator = '|';
  function form_str(str, repeat, separator) {
    let sub_str = [];
    if (isNaN(repeat) || repeat < 0) return str;
    else for (let i = 0; i < repeat; i++) {
      sub_str.push(`${str}`);
    }
    return sub_str.join(separator.toString());
  }

  if (!options.hasOwnProperty('addition')) return form_str(str, options.repeatTimes, options.separator);
  else {
    let sub_str = form_str(options.addition, options.additionRepeatTimes, options.additionSeparator);
    return form_str(`${str}` + sub_str, options.repeatTimes, options.separator);
  }
};
