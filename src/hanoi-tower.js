import { NotImplementedError } from '../extensions/index.js';

/**
 * Calculate turns number and time (in seconds) required
 * to solve puzzle
 * 
 * @param {Number} disks number of disks
 * @param {Number} turnsSpeed speed (in turns/hour)
 * @return {Object} object with props turns (number of turns)
 * and seconds (time in seconds)
 *
 * @example
 * 
 * calculateHanoi(9, 4308) => { turns: 511, seconds: 427 }
 *
 */
export default function calculateHanoi(disksNumber, turnsSpeed) {
  let stack1 =[];
  let stack2 = [];
  let stack3 = [];
  for (let i=0; i<disksNumber; i++){
    stack1.splice(0,0,i)
  }
  return stack1;
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}
