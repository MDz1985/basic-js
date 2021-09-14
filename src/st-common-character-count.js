import { NotImplementedError } from '../extensions/index.js';

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
export default function getCommonCharacterCount(s1, s2 ) {
  let long = 0;
  let d1 = s1;
  let d2 = s2;

 for (let char of s1){
  if (d2.includes(char)&& d1.includes(char)){
    long ++;
    d1 = d1.replace(char, '');
    d2 = d2.replace(char, '');}
    
 }
 return long;
}
