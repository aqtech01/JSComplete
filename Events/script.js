"use strict";

let togglebtn = document.querySelector("#toggleButton");

let currentMode = "black";

togglebtn.addEventListener("click", () => {
  if (currentMode === "light") {
    let body = document.querySelector("body");
    currentMode = "black";
    body.style.backgroundColor = "black";
    togglebtn.innerText = "Black Mode";
  } else {
    currentMode = "light";
    let body = document.querySelector("body");
    body.style.backgroundColor = "white";
    togglebtn.innerText = "White Mode";
  }
});

// let btn1 = document.querySelector(".btn_firstClick");
// btn1.addEventListener("click", (e) => {
//   console.log(e.type);

//   btn1.style.color = "white";
//   btn1.style.backgroundColor = "red";
// });

// let btn2 = document.querySelector(".btn_firstClick");
// btn1.addEventListener("click", (e) => {
//   console.log(e.type);

//   btn1.style.color = "white";
//   btn1.style.backgroundColor = "red";
// });

// let btn3 = document.querySelector(".btn_firstClick");
// btn1.removeEventListener("click", (e) => {
//   console.log(e.type);

//   btn1.style.color = "white";
//   btn1.style.backgroundColor = "red";
//   console.log("Events Removed");
// });

// let btn4 = document.querySelector(".btn_firstClick");
// btn1.addEventListener("click", (e) => {
//   console.log(e.type);

//   btn1.style.color = "white";
//   btn1.style.backgroundColor = "red";
// });

// btn1.onclick = () => {
//   btn1.style.color = "white";
//   btn1.style.backgroundColor = "red";
// };
// let div = document.querySelector("#div1");
// div.onmouseover = (e) => {
//   console.log(e);
//   console.log(e.type);

//   div.style.color = "white";
//   div.style.backgroundColor = "red";
//   div.innerText = "Mouse Over";
// };
