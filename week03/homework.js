function convertStringToNumber (string,x){
  if(arguments.length < 2){
      x = 10
  }
  var char = string.split('');
  var number = 0;
  var i = 0;
  while(i<char.length && char[i] !== '.'){
      number = number * x;
      number += char[i].codePointAt(0) - '0'.codePointAt(0);
      i++
  }
  if(char[i] === '.'){
      i++
  }
  var decimal = 1;
  while(i<char.length){
      decimal = decimal / x;
      number += (char[i].codePointAt(0) - '0'.codePointAt(0)) * decimal;
      i++
  }
  return number
}


function convertNumberToString(number, type) {
  if (arguments.length < 2) {
      type = 10;
  }
  var integer = Math.floor(number);
  var fractionPos = ('' + number).indexOf('.');
  var fractionLength = ('' + number).length - fractionPos - 1;
  var fraction = (number - integer).toFixed(fractionLength);
  var str = '';
  while (integer > 0) {
      str = integer % type + str;
      integer = Math.floor(integer / type);
  }
  if (fractionPos > -1) {
      str += '.';
      while (fractionLength > 0) {
          fraction *= type;
          str += Math.floor(fraction % type);
          fractionLength--;
      }
  }
  return str;
}