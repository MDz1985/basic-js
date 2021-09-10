import { NotImplementedError } from '../extensions/index.js';

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
export default class DepthCalculator {
  calculateDepth(arr) {
    let n = 1;
    let array =[];
    function getDepth (some){
      //n= n+1;
      array.push(n);
      for (let i =0; i< some.length; i++){
        if (Array.isArray(some[i])){
          n= n+1;
          array.push(n);
          getDepth(some[i])
        }
        n=1;
      }
    }
    getDepth(arr);
    
    function getMaxOfArray(numArray) {
      return Math.max.apply(null, numArray);
    }
    return array
    //getMaxOfArray(array); 
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }
}
