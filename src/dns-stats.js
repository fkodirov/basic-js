const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
    let count;
    let arr ={};
    let key;
    if(domains.length>0){
    let last=domains[domains.length-1].split('.').reverse()[0];
    arr['.'+last]=domains.length;
    domains.sort(function(a, b) {
      return a.length - b.length;
    });
    for(let elem of domains){
      count=0;
      for(elem2 of domains){
          if(elem2.includes(elem)){
            count++;
          }
        }
      arr[`.${elem.split('.').reverse().join('.')}`]=count;
    }}
  return arr;
}

module.exports = {
  getDNSStats
};
