import { NotImplementedError } from '../extensions/index.js';

/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {Number} inputString
 * @return {Boolean}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */
export default function isMAC48Address(n) {
  let array = n.split('-');
  if (array.length === 6){
    for (let i = 0; i<6 ; i++){
      if (array[i].length !==2){return false}
    }
    if (n.replace(/[0-9a-f]/gi, '') === '-----'){return true}
  }return false
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}
