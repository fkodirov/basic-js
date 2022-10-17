const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  let out='';
  let count=0;
  for(let i=0;i<str.length;i++){
    count++;
      if(str[i]!=str[i+1]){
          if(count>1)
      out+=count;
          out+=str[i];
          count=0;
      }
  }
  return out;
}

module.exports = {
  encodeLine
};
