import { NotImplementedError } from '../extensions/index.js';

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
export default function minesweeper (matrix) {
  const arr = [];
  for (let j = 0; j< matrix.length; j++){
    arr[j] =[];
    for (let i = 0; i< matrix[j].length;i++){
      arr[j][i]=0;
    if (matrix[j][i] === true){arr[j][i] += 1;} else{
    if (matrix[j][i-1] === true){arr[j][i] += 1;}
    if(j>0){if (matrix[j-1][i] === true){arr[j][i] += 1;}}
    if (j< matrix.length -1){if (matrix[j+1][i] === true){arr[j][i] += 1;}}
    if (i< matrix[j].length -1){if (matrix[j][i+1] === true){arr[j][i] += 1;}}
    if (j>0 && i>0){if (matrix[j-1][i-1] === true){arr[j][i] += 1;}}
    if (j< matrix.length -1 && i< matrix[j].length -1){if (matrix[j+1][i+1] === true){arr[j][i] += 1;}}
    if (j > 0 && i< matrix[j].length -1){if (matrix[j-1][i+1] === true){arr[j][i] += 1;}}
    if (j< matrix.length -1 && i >0){if (matrix[j+1][i-1] === true){arr[j][i] += 1;}}
    }
    }
    
  }
  return arr;
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}
