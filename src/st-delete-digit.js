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
  let m = n.toString()
  for (let j = 0; j <= 9; j++){
    for (let i = 0; i < m.length; i++){
      if (Number(m[i]) === j){return Number(m.replace(Number(j),''))}
    }
  }
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}
