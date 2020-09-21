const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (!Array.isArray(members)) return false;
  let names = members.filter(name => typeof name == 'string').map(name => name.match(/[a-z]/gi).join('').toUpperCase()).sort();
  return names.reduce((team, name) => team + name[0], '');
  // remove line with error and write your code here
};
