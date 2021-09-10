import { NotImplementedError } from '../extensions/index.js';

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
export default function getMatrixElementsSum(matrix) {
   
  const reducer = (previousValue, currentValue) => previousValue + currentValue;
  let summ = matrix[0].reduce(reducer);

    for (let j = 1; j< matrix.length; j++){
    
    for (let i = 0; i< matrix[j].length;i++){
      if (matrix[j-1][i] !== 0){summ += matrix[j][i];}
    }
  }
  return summ;
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}
