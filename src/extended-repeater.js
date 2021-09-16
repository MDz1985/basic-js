import { NotImplementedError } from '../extensions/index.js';

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
export default function repeater(str, options) {
  if (str === null){str = 'null';}
  str = String(str);
  let repeatTimes = 1;
  let separator = '+';
  let addition = '';
  let additionRepeatTimes = 1;
  let additionSeparator = '|';
  if (options.repeatTimes){repeatTimes = options.repeatTimes;}
  if (options.separator){separator = options.separator;}
  if (options.addition){addition = String(options.addition);}
  if (typeof(options.addition) === 'boolean'){addition = String(options.addition);}
  if (options.addition === null){addition = 'null';}
  if (options.additionRepeatTimes){additionRepeatTimes = options.additionRepeatTimes;}
  if (options.additionSeparator){additionSeparator = options.additionSeparator;}
   let aSL = 0 - additionSeparator.length;
   let aS = 0 - separator.length;
  addition = ((addition+additionSeparator).repeat(additionRepeatTimes))
  addition = addition.slice(0, aSL);
  str = str + addition + separator;
  str = (str.repeat(repeatTimes)).slice(0, aS)
return str

  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}
