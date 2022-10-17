const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  let pos=[];
  let out=[];
  let j=-1;
  let length=arr.length;
  for(let i=0;i<arr.length;i++){
    if(arr[i]==-1)pos.push(i);
  }
  arr.sort(function(a, b) {
    return a - b;
  });
  let newarr = arr.filter(function(n) {
    return n != -1;
  });
  for(let i=0;i<length;i++){
    if(pos.includes(i)){
      out[i]=-1;
    }
    else{j++;
      out[i]=newarr[j];
    }
  }
  return out;
}

module.exports = {
  sortByHeight
};
