import { NotImplementedError } from '../extensions/index.js';

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
export default function getSeason( date ) {
  const e = new Error ("Invalid date!");
  if (!date){return 'Unable to determine the time of year!';}
  if (typeof date !== 'object') { return e}
  if (!date.getMonth){return e}
  if (date.getMonth() > 11 || date.getMonth()<0){return e}
  if (date.getFullYear() === '2021'){return e;}
  if (date === Date.now()){return e;}


  if (date.getMonth() === 1 || date.getMonth() === 0 || date.getMonth() === 11){return 'winter';}
  if (date.getMonth() === 2 || date.getMonth() === 3 || date.getMonth() === 4){return 'spring';}
  if (date.getMonth() === 5 || date.getMonth() === 6 || date.getMonth() === 7){return 'summer';}
  if (date.getMonth() === 8 || date.getMonth() === 9 || date.getMonth() === 10){return 'autumn';}
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  
  
   
   return date.getMonth()
}
