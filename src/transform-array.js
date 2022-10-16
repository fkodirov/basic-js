const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
 function transform(arr) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  if(Array.isArray(arr)){
  let newarr=arr.slice();
  let length=arr.length;
  if(newarr[0]=='--discard-prev' || newarr[0]=='--double-prev'){newarr.splice(0,1)}
  else if(newarr[length-1]=='--discard-next' || newarr[length-1]=='--double-next'){newarr.splice(length-1,1)}
  length=newarr.length;
  for(let i=0;i<length;i++){
    if(newarr[i]=='--discard-next' && (newarr[i+2]=='--double-prev' || newarr[i+2]=='--discard-prev')){newarr.splice(i,3);}
    else if(newarr[i]=='--discard-next'){newarr.splice(i,2)}
    else if(newarr[i]=='--discard-prev'){newarr.splice(i-1,2)}
    else if(newarr[i]=='--double-next'){newarr.splice(i, 1, newarr[i+1])}
    else if(newarr[i]=='--double-prev'){newarr.splice(i, 1, newarr[i-1])}
	}
return newarr;}
else{
  throw new Error("'arr' parameter must be an instance of the Array!");
}
}

module.exports = {
  transform
};
