const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr, level = 0) {
    if (arr instanceof Array) {
      let level_map;
      if (arr.length != 0) level_map = arr.map(item => this.calculateDepth(item, level + 1));
      else level_map = [level + 1];
      return Math.max.apply(null, level_map);
    }
    return level;
  }
};
