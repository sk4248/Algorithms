// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// ** solution 1
// function reverse(str) {
//   const arr = str.split('');
//   arr.reverse();
//   return arr.join('');
//
//   // or
//   // return str
//   // .split('')
//   // .reverse()
//   // .join('');
// }

// ** solution 2
// function reverse(str){
//   let reversed = '';
//   // for(i; i< str.length; i++){
//   // Avoid writing this kind of for loop since this might introduce a lot of errors
//   // }
//
//   for(let sree of str){ // Introduced with ES2015 and much simpler for loop
//     reversed = sree + reversed
//   }
//   return reversed;
// }

// ** solution 3

function reverse(str){
   // Here we are using a function called 'reducer' which compresses an array into one element
   // and we are reversing the array using that method
  return str.split('').reduce((rev,sree)=> sree + rev, '');
}

module.exports = reverse;
