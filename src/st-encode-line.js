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
 
  
  str.replace(/(\w)\1+/g, '$1')
 /* let newStr = '';
  let n= 0;
  for (let i =0; i< str.length;i++){
    while a
    break;
    }
    if (n === 1) {newStr+=str[i];}else {newStr += n+str[i]; }   
    n =0;

  }
  */
  return newStr;
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}
