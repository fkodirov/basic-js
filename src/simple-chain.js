const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  chain:[],
  getLength() {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    return this.chain.length;
  },
  addLink(value) {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    if(value== 'undefined'){this.chain.push('()');}
    else {
      this.chain.push(`( ${value} )`);}
    return this;

  },
  removeLink(position) {
    if (Number.isInteger(position) && (position > 0 && position <= this.chain.length)) {this.chain.splice(position - 1, 1);}
    else {this.chain=[];throw new Error("You can't remove incorrect link!");}
    return this;
  },
  reverseChain() {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    this.chain.reverse();
    return this;
  },
  finishChain() {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
      let arr = this.chain.join('~~')
      this.chain = []
      return arr;
  }
};

module.exports = {
  chainMaker
};
