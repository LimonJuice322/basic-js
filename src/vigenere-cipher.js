const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(arg) {
    this.mode = (arg == false) ? 'reverse' : 'front';
  }
  encrypt(message, key) {
    let alph = 'abcdefghijklmnopqrstuvwxyz';
    let str = message.toLowerCase();
    let key_word = key.toLowerCase();
    let result = [];
    let char;
    let key_index = 0;
    for (let i = 0; i < str.length; i++) {
      if (!str[i].match(/[a-z]/i)) {
        char = str[i];
        result.push(char);
      } else {
        if (key_index > key_word.length-1) key_index = 0;
        char = (alph.indexOf(str[i]) + alph.indexOf(key_word[key_index])) % 26;
        result.push(alph[char]);
        key_index += 1;
      }
    }
    return (this.mode == 'front') ? result.join('').toUpperCase() : result.reverse().join('').toUpperCase();
  }
  decrypt(message, key) {
    let alph = 'abcdefghijklmnopqrstuvwxyz';
    let str = message.toLowerCase();
    let key_word = key.toLowerCase();
    let result = [];
    let char;
    let key_index = 0;
    for (let i = 0; i < str.length; i++) {
      if (!str[i].match(/[a-z]/i)) {
        char = str[i];
        result.push(char);
      } else {
        if (key_index > key_word.length-1) key_index = 0;
        char = (alph.indexOf(str[i]) + 26 - alph.indexOf(key_word[key_index])) % 26;
        result.push(alph[char]);
        key_index += 1;
      }
    }
    return (this.mode == 'front') ? result.join('').toUpperCase() : result.reverse().join('').toUpperCase();
  }
}

module.exports = VigenereCipheringMachine;
