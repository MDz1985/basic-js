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
  let n =[];
let domainsReverse = [];
for (let one of domains){
  domainsReverse.push(one.split('.').reverse())
}
  
//MAX LENGTH + array of domens
for (let i = 0; i < domainsReverse.length; i++){
  n.push(domainsReverse[i].length) 
  for (let j = 1; j < domainsReverse[i].length; j++){
    
    domainsReverse[i][j] = (domainsReverse[i][j-1] + '.'+ domainsReverse[i][j]); 
    
  }
}
let max = Math.max.apply(null, n)

// object
let result =[]
let obj = {}

for (let i = 0 ; i< domains.length ; i++){
  for (let l = 0; l< max; l++){
    if (domainsReverse[i][l]){
      if (result.includes(domainsReverse[i][l])){
      obj['.'+domainsReverse[i][l]] += 1;  
      } else{
      result.push(domainsReverse[i][l]);
      obj['.'+domainsReverse[i][l]] = 1;
      }
    }  
  } 
}
return obj;
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}
