const CustomError = require("../extensions/custom-error");

const chainMaker = {
  getLength() {
    return this.chain.length;
  },
  addLink(value = '( )') {
    if (this.chain != undefined) this.chain.push(`( ${value} )`);
    else {
      this.chain = [];
      this.chain.push(`( ${value} )`);
    }
    return this;
  },
  removeLink(position) {
    if (Number.isInteger(position) && (position >= 1 && position <= this.chain.length)) this.chain.splice(position-1, 1);
    else {
      this.chain = [];
      throw new Error('Error');
    }
    return this;
  },
  reverseChain() {
    this.chain.reverse();
    return this;
  },
  finishChain() {
    let result = this.chain.join('~~');
    this.chain = [];
    return result;
  }
};

module.exports = chainMaker;
