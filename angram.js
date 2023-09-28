function checkStringsAnagram(a, b) {
    let len1 = a.length;
    let len2 = b.length;
    if(len1 !== len2){
       console.log('Invalid Input');
       return
    }
    let str1 = a.split('').sort().join('');
    let str2 = b.split('').sort().join('');
    if(str1 === str2){
       console.log("yes Anagram");
    } else { 
       console.log("No Anagram");
    }
 }
 const a=prompt('Enter a string :');
 const b=prompt('Enter another string :');
const value = checkStringsAnagram(a, b);
console.log(value);