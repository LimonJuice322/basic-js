const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15;
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  if (!Number.isFinite(sampleActivity) || typeof sampleActivity != 'string' || +sampleActivity > 15) return false;
  let finalActivity = +sampleActivity;
  return Math.ceil(Math.log(MODERN_ACTIVITY/finalActivity) / (0.693 / HALF_LIFE_PERIOD));
  // remove line with error and write your code here
};
