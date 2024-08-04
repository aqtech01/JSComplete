"use strict";

let btn = document.querySelectorAll(".box");
let reset_btn = document.querySelector("#reset");
let message = document.querySelector("#msg");
let newGame = document.querySelector("#new-game");
let turnO = true;

const winPatterns = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

btn.forEach((box, index) => {
  box.addEventListener("click", () => {
    if (turnO) {
      box.innerText = "O";
      box.classList.add("o-player");
      turnO = false;
    } else {
      box.innerText = "X";
      box.classList.add("x-player");
      turnO = true;
    }
    box.disabled = true;
    checkWinner();
  });
});

const disableBoxes = () => {
  btn.forEach((box) => (box.disabled = true));
};

const enableBoxes = () => {
  btn.forEach((box) => {
    box.disabled = false;
    box.innerText = "";
  });
};

const resetGame = () => {
  turnO = true;
  enableBoxes();
  message.classList.add("hide");
};

const showWinner = (winner) => {
  message.innerText = `Congratulations, Winner is ${winner}`;
  message.classList.remove("hide");
  disableBoxes();
};

const checkWinner = () => {
  for (let winPattern of winPatterns) {
    let pos1 = btn[winPattern[0]].innerText;
    let pos2 = btn[winPattern[1]].innerText;
    let pos3 = btn[winPattern[2]].innerText;
    if (pos1 !== "" && pos2 !== "" && pos3 !== "") {
      if (pos1 === pos2 && pos2 === pos3) {
        showWinner(pos1);
        return;
      }
    }
  }

  // Check for a tie
  if ([...btn].every((box) => box.innerText !== "")) {
    message.innerText = "It's a Tie!";
    message.classList.remove("hide");
    disableBoxes();
  }
};

reset_btn.addEventListener("click", resetGame);
newGame.addEventListener("click", resetGame);
