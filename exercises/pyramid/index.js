// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

// My own solution

// for(let row = 0; row <n; row++){
//   let stair = '';

//   for(let column = 0; column <n; column++){
//     if(column <= row){
//       stair += '#';
//     }else{
//       stair += ' ';
//     }
//   }
//   console.log(reverseString(stair).concat(stair.slice(1)));
// }

// }
// function reverseString(str) {
// return str
//   .split('')
//   .reverse()
//   .join('');

// }

// solution 1
// function pyramid(n) {

//   const midpoint = Math.floor((2*n - 1)/2);
//   for(let row=0; row < n; row ++){
//     let level = '';

//     for(let column=0; column < 2 * n-1; column ++){
//       if(midpoint - row <= column && midpoint + row >= column){
//         level += '#';
//       }else{
//         level += ' ';
//       }
//     }
//     console.log(level);
//   }
  
// }


function pyramid(n, row=0, level = '') {
 
  if ( n === row ){
    return;
  }

  if(2 * n -1 === level.length){
    console.log(level);
    return pyramid(n, row+1);
  }

  const midpoint = Math.floor((2*n - 1)/2);
  let add;

  if(midpoint - row <= level.length && midpoint +row >= level.length){
    add = '#';
  }else{
    add = ' ';
  }
    pyramid(n, row, level + add);
  }

module.exports = pyramid;
