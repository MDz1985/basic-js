import { NotImplementedError } from '../extensions/index.js';

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
export default function encodeLine(str) {
 let n;
  let newStr = str;
  let nStr = str;
  while (nStr.length > nStr.replace(/(\w)\1+/, '').length){
    n=  nStr.length  - nStr.replace(/(\w)\1+/, '').length ;
    nStr = nStr.replace(/(\w)\1+/, '');
    newStr = newStr.replace(/(\w)\1+/, n+'$1');
  }
return newStr;
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}
