import { NotImplementedError } from '../extensions/index.js';

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
export default function transform(arr) {
  const newArray =[];
  const e  =  Error ("\'arr\' parameter must be an instance of the Array!");
  
if (typeof arr !== 'object'){throw e};
if (!arr){throw e};
if (arr === null){throw e};
if (arr.toString()==='[object Object]'){throw e};
for (let i = 0; i< arr.length; i++ ){
  switch (arr[i]){
    case '--discard-next':
      i =i +2;
      break;
    case '--discard-prev':
      if (i>0){
        newArray.pop();  
      }
      break;
    case '--double-next':
      if (i<arr.length -1){
        newArray.push(arr[i+1]);
      }
      break;
    case '--double-prev':
      if (i>0){
        newArray.push(arr[i-1]);
      }
      break;
    default:
      newArray.push(arr[i]);
    }
 

}
return newArray;
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}
