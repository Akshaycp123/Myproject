function checkpalindrome(str) {
    var re = /[^A-Za-z0-9]/g;
    str = str.toLowerCase().replace(re, '');
    var len = str.length;
    for (var i = 0; i < len/2; i++) {
      if (str[i] !== str[len - 1 - i]) {
          return 'it is not a palindrome';
      }
    }
    return 'it is a palindrome';
   }
   const str=prompt('Enter a string :');
const value = checkpalindrome(str);
console.log(value);
