"use strict";
let marks = prompt("Enter Your Marks!");
// check % 5 == 0 ? alert("Multiple of 5") : alert("Not Multiple");
if (marks >= 90) {
  alert("A+ Grade");
} else if (marks >= 80 && marks <= 89) {
  alert("A Grade");
} else if (marks >= 70 && marks <= 79) {
  alert("B Grade");
} else if (marks >= 60 && marks <= 69) {
  alert("C Grade");
} else if (marks >= 50 && marks <= 50) {
  alert("D Grade");
} else {
  alert("Fail");
}
