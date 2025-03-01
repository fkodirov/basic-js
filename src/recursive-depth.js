const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(arr) {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    let getDepth;

      var depth = 0; 
      if (Array.isArray(arr)) { 
          for (var i in arr) { 
              depth = Math.max(depth, this.calculateDepth(arr[i])); 
          } 
          depth++; 
      } 
      return depth; 
  }
}

module.exports = {
  DepthCalculator
};
