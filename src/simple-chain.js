import { NotImplementedError } from '../extensions/index.js';

/**
 * Implement chainMaker object according to task description
 * 
 */
export default {
  
  getLength() {
     return this.length;
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  },
  addLink(value) {
    if (Array.isArray(this)){
      if (value !== null){
        return this.push(value.toString());  
      }
      return this.push('null');
    }
    
    return this;
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  },
  removeLink(position) {
    //if(position){
      // if (Array.isArray(this)){
        if(position>=0 && position< this.length && typeof(position) === 'number' && position % 1 === 0
          ){
          let a = this.slice(0,position);
          a.push(this.slice(position+1))
          return a.flat()
        //}
      } else {throw new Error (`You can't remove incorrect link!`)}
      // }
      
    
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  },
  reverseChain() {
    
    return function (a)
    {return this.reverse()}
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  },
  finishChain() {
    let finish = this.join(' )~~( ');
    
    this.length = 0;
    return finish.padStart(finish.length + 2,'( ').padEnd(finish.length + 4,' )');
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }
};
