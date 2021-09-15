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
  constructor () { 
    this.n = 1;
    this.array =[1];
  }

  calculateDepth(arr) {
          
        for (let i =0; i< arr.length; i++){
          if (Array.isArray(arr[i])){
            this.n= this.n+1;
            this.array.unshift(this.n);
            this.calculateDepth(arr[i])
            this.n=this.array[this.array.length-1];
          }
          
        }
        return Math.max.apply(null, this.array);
      }
      
    }
     