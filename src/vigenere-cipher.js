import { NotImplementedError } from '../extensions/index.js';

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
export default class VigenereCipheringMachine {
  constructor (a){
this.a = a;
  }
  table(string, column, work){ //STRING - key symbol, COLUMN word symbol
    let alphabet = {
      ['A']:0,['B']:1,['C']:2,['D']:3,['E']:4,['F']:5,['G']:6,['H']:7,['I']:8,['J']:9,['K']:10,['L']:11,['M']:12,['N']:13,
      ['O']:14,['P']:15,['Q']:16,['R']:17,['S']:18,['T']:19,['U']:20,['V']:21,['W']:22,['X']:23,['Y']:24,['Z']:25}
    let criptTable = [];
    criptTable[0] = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    for (let i = 1; i< criptTable[0].length; i++){
      criptTable[i] = (criptTable[i-1]+criptTable[i-1][0]).slice(1);
    }
    if (work === 'encrypt'){
      return criptTable[alphabet[string.toUpperCase()]][alphabet[column.toUpperCase()]];
    } else {
        for (let i = 0; i< criptTable[0].length; i++){
          
          if (column.toUpperCase() === criptTable[alphabet[string.toUpperCase()]][i]){
          return criptTable[0][i]
        }
      
    }
  }
}

  encrypt(message, key) {
    let encryptString = '';
    let i; 
    let n = 0;
    if(message && key){}else{
      throw new Error (`Incorrect arguments!`);
    }
    let codeWord ='';
    while (codeWord.length <= message.length){codeWord += key;}
    codeWord = codeWord.substring(0, message.length); //long key

    //ENCRYPT
    for(i = 0; i < message.length; i++){
      if (message[i] !== ' ' && message[i] !== ':' && message[i] !== ')' && message[i] !== '^' && message[i] !== '!' && message[i] !== '1'
      && message[i] !== '2' && message[i] !== '3' && message[i] !== '4' && message[i] !== ',' && message[i] !== '.'){
        encryptString += this.table(codeWord[n],message[i],'encrypt');
        n++;
      } else {
        encryptString += message[i];
        //n = i - 1;
      }
    }
    return this.a === false ? encryptString.split('').reverse().join('') : encryptString ;
    
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }
  decrypt(message, key) {
    let decryptString = '';
    let i; 
    let n = 0;
    if(message && key){}else{
      throw new Error (`Incorrect arguments!`);
    }
    let codeWord ='';
    while (codeWord.length <= message.length){codeWord += key;}
    codeWord = codeWord.substring(0,message.length);
//DECRYPT

    for(i = 0; i < message.length; i++){
      if (message[i] !== ' ' && message[i] !== ':' && message[i] !== ')' && message[i] !== '^' && message[i] !== '!' 
      && message[i] !== '1'&& message[i] !== '2' && message[i] !== '3' && message[i] !== '4' && message[i] !== ',' && message[i] !== '.'){
        decryptString += this.table(codeWord[n],message[i],'decrypt');
        n++;
      } else {
        decryptString += message[i];
      }
    }
  return this.a === false ? decryptString.split('').reverse().join('') : decryptString;
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  
}
}