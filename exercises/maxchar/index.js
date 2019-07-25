// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {

   let obj = {};
   let max = 0;
   let maxChar = '';

  for(let char of str){
    obj[char] ? obj[char]++ : obj[char] = 1;
  }

  for(let objs in obj){
    if(obj[objs]>max){
      max = obj[objs];
      maxChar = objs;
    }
  }
  return maxChar;
  console.log(maxChar);

}

module.exports = maxChar;
