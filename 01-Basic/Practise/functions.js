"use strict";

// function searchVowel(str) {
//   let count = 0;
//   for (let i of str) {
//     if (i === "a" || i === "i" || i === "o" || i === "u" || i === "e") {
//       count++;
//     }
//   }
//   return count;
// }
// console.log(searchVowel("This is Sparta"));

// const countVowel = (str) => {
//   let count = 0;
//   for (let key of str) {
//     if (
//       key === "a" ||
//       key === "e" ||
//       key === "i" ||
//       key === "o" ||
//       key === "u"
//     ) {
//       count++;
//     }
//   }
//   return count;
// };
// console.log(countVowel("aeiou"));

//  let marks = [33, 56, 90, 98, 89, 67, 91, 90, 45, 67];
// let res = marks.filter((val) => {
//   return val >= 90;
// });

// console.log(res);

// let n = [33, 56, 90, 98, 89, 67, 91, 90, 45, 67];
// let numberSum = n.reduce((prev, curr) => {
//   return prev + curr;
// });
// console.log(numberSum);
let n = [33, 56, 90, 98, 89, 67, 91, 90, 45, 67];
let numberSum = n.reduce((prev, curr) => {
  return prev * curr;
});
console.log(numberSum);
