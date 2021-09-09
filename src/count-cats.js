import { NotImplementedError } from '../extensions/index.js';

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
export default function countCats(a) {
  //console.log(this)
  //return this;
  
  
  let count = 0;
  for (let j = 0; j<a.length; j++){
    //a[j]=[]
    for (let i = 0; i<a[j].length; i++){
    if (a[j][i] === "^^"){
      count ++;
    }
  }
}
console.log(a)
//throw new NotImplementedError('Not implemented');
  return count 
  
  
  // remove line with error and write your code here
}
