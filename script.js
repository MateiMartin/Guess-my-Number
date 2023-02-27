"use strict";
/*console.log(document.querySelector(`.message`).textContent);
document.querySelector(`.message`).textContent = `Correct Number🎉`;
// console.log(document.querySelector(`.message`).textContent);

document.querySelector(`.number`).textContent=13;
document.querySelector(`.score`).textContent=20;


document.querySelector(`.guess`).value=10;
console.log( document.querySelector(`.guess`).value);
*/
let ok = 1;
let secretNum = Math.trunc(Math.random() * 20) + 1;
let score = 20;
console.log(`sec`, secretNum);
document.querySelector(`.check`).addEventListener(`click`, function () {
  const guess = Number(document.querySelector(`.guess`).value);
  console.log(guess);
  if (guess < 1 || guess > 20) {
    //INVALID
    document.querySelector(`.message`).textContent = `Not a valid number🚫`;
  } else if (score === 1) {
    //PIERDE
    document.querySelector(`.message`).textContent = `💥You lost the game!`;
    document.querySelector(`.score`).textContent--;
  } else if (guess === secretNum) {
    //CASTIGA
    document.querySelector(`.message`).textContent = `🎉Correct Number!`;

    if (ok === 1) {
      document.querySelector(`.highscore`).textContent =
        document.querySelector(`.score`).textContent;
      ok = 0;
    }else{ 
    if (Number(document.querySelector(`.highscore`).textContent)<Number(document.querySelector(`.score`).textContent) ) 
      document.querySelector(`.highscore`).textContent=document.querySelector(`.score`).textContent;
    
  }
    /////////////////////
    document.querySelector(`body`).style.backgroundColor = `#60b347`;
    document.querySelector(`.number`).style.width = `30rem`;
    document.querySelector(`.number`).textContent =
      document.querySelector(`.guess`).value;
  } else if (guess > secretNum) {
    //MAI MARE
    document.querySelector(`.message`).textContent = `Too high 📈`;
    score--;
    document.querySelector(`.score`).textContent = score;
  } else {
    //MAI MIc
    document.querySelector(`.message`).textContent = `Too low 📉`;
    score--;
    document.querySelector(`.score`).textContent = score;
  }
});

document.querySelector(`.again`).addEventListener(`click`, function () {
  document.querySelector(`body`).style.backgroundColor = `#222`;
  document.querySelector(`.message`).textContent = `Start guessing...`;
  document.querySelector(`.number`).style.width = `15rem`;
  document.querySelector(`.number`).textContent = `?`;
  document.querySelector(`.score`).textContent = 20;

  //////
  score = 20;
  secretNum = Math.trunc(Math.random() * 20) + 1;
  console.log(`sec`, secretNum);
  document.querySelector(`.guess`).value = ``;
});
