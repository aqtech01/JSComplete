"use strict";
let div = document.querySelector("#box");
div.style.backgroundColor = "green";
div.style.fontSize = "35px";
div.style.color = "white";
div.style.fontSize = "bold";
div.style.height = "100px";
div.style.paddingTop = "30px";
div.style.paddingLeft = "20px";
div.innerText = "Welcome to AQTECH";
let newBtn = document.createElement("button");
newBtn.innerText = "Click Me";
div.append(newBtn);
// let div = document.querySelector("div");
// console.log(div);
// let id = div.getAttribute("id");
// console.log(div);

// let para = document.querySelector("p");
// console.log(para.getAttribute("class"));

// let divs = document.querySelectorAll(".box");
// let idx = 1;
// for (const element of divs) {
//   element.innerHTML = `New Unique Value ${idx}`;
//   idx++;
// }

// // let h2 = document.querySelector("#heading2");
// console.dir(h2.innerText + " From Apna College Student");

// console.log("Welcome to AQTECH");
// document.getElementsByClassName();
// document.getElementById();
// document.getElementsByTagName();
// document.querySelector()
