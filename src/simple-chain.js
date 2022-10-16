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
    if(arguments.length<1){this.chain.push('()');}
    else {this.chain.push(`( ${value} )`);}
    return this;

  },
  removeLink(position) {
    if (Number.isInteger(position) || (position > 0 && position <= this.chain.length)) {this.chain.splice(position - 1, 1);}
    else {throw new Error("You can't remove incorrect link!");}
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
    return this.chain.join('~~');
    this.chain=[];
  }
};

module.exports = {
  chainMaker
};
