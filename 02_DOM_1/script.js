"use strict";
let divs = document.querySelectorAll(".box");
let idx = 1;
for (const element of divs) {
  element.innerHTML = `New Unique Value ${idx}`;
  idx++;
}

// let h2 = document.querySelector("#heading2");
// console.dir(h2.innerText + " From Apna College Student");

// console.log("Welcome to AQTECH");
// document.getElementsByClassName();
// document.getElementById();
// document.getElementsByTagName();
// document.querySelector()
