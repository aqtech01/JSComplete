"use strict";
// let marks = [85, 97, 44, 37, 76, 60];
// let marksSum = 0;
// for (const mark of marks) {
//   marksSum = mark + marksSum;
// }
// console.log(marks.length);
// console.log(marksSum / marks.length);

let itemsPrice = [250, 645, 300, 900, 50];

let finalArray = [];
for (let finalPrice of itemsPrice) {
  finalArray.push(finalPrice * 0.9);
}
console.log(finalArray);
