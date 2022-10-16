const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
 function createDreamTeam(array) {
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
    let teamname='';
    if(Array.isArray(array)){
    array.filter(el=> {return (el != null && el != "" && typeof(el)=="string")}).map(e => e.toUpperCase().replace(/ /g,'')).sort().forEach(function(name){
        teamname+=name[0];
    });
    return teamname;}
    else{
    return false;}
}


module.exports = {
  createDreamTeam
};
