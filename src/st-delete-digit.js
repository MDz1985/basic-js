import { NotImplementedError } from '../extensions/index.js';

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
export default function deleteDigit(n) {
  for (let j =0; j<=9; j++){
    for (let i=0; i<n.length;i++){
      if (n[i] === j){return n.replace('0','')}
  }
  
    
  }
  throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}
