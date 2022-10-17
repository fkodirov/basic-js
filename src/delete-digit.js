const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  let m=0;
  let arr; 
  for (let i=0;i<n.toString().length;i++){
    arr=n.toString().split("");
    arr.splice(i, 1);
    if(arr.join('')*1>m)
    m=arr.join('')*1;
  }
  return m;
}

module.exports = {
  deleteDigit
};
