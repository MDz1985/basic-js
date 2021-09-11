import { NotImplementedError } from '../extensions/index.js';

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
export default function getDNSStats(domains) {
  // let arr =[];
  // let obj={};
  // for (let i = 0; i< domains.length;i++){
  //   arr.push (domains[i].split('.').reverse());   
  // }
  
  //   //for (let j = arr[i].length -1; j>=0 ;i--){
  //     for (let i = 0; i< arr.length;i++){
  //       if ()

       
  //   }
    
  // }
  throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}
