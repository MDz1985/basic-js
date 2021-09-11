import { NotImplementedError } from '../extensions/index.js';

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
export default function getEmailDomain(email) {
  let domain = email.slice(email.indexOf('@')).slice(1);

  return domain.includes('@') ? domain.slice(domain.indexOf('@')).slice(1) : domain;

  //a+=1;
 // return email.slice(email.indexOf('@'+1)).slice(email.indexOf('@')).slice(1);
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}
