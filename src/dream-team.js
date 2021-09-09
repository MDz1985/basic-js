import { NotImplementedError } from '../extensions/index.js';

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
export default function createDreamTeam(a/* members */) {
  if (typeof a !== 'object'){return false;}
  if (a === null){return false;}
  let name =[];
  
  for (let i = 0; i < a.length; i++){
    if (a[i] !== null && typeof a[i] === 'string'){
      for (let j = 0; j < a[i].length; j++){
        if (a[i][j] !== ' '){
          name.push(a[i][j].toUpperCase());
          break;
        }
      }
    } 
  }
  return name.sort(function (a, b) {
    if (a > b) {
      return 1;
    }
    if (a < b) {
      return -1;
    }
    return 0;
  }).join('')
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}
