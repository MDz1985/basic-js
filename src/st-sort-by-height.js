import { NotImplementedError } from '../extensions/index.js';

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
export default function sortByHeight(arr) {
  let n = [];
  let b = arr; 
  let result = []
    for (let i =0 ; i< arr.length ; i++){
      if (arr[i] === -1){
        n.push(i);
      } 
    }
    arr.sort(function(a, b) {
    return a - b})

    for (let i = 0; i<20 ;i++){
      b = b.join(' ').replace('-1 ', '').split(' ')
    }
    
    console.log (arr)
    console.log (b)
    for (let i =0 ; i< arr.length ; i++){
      if (i === n[0]){
        result.push(-1);
        n.shift(); 
      } else {
        result.push(Number(b[0]));
        b.shift()
      }
    }
    return result
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}
