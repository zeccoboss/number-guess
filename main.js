const guessNumber = document.querySelector("#guessNumber");
const guessResult = document.querySelector("#guessResult");
const guessBtn = document.querySelector("#guessBtn");
const refreshGeuss = document.getElementById("refreshGeuss");
let myGuess;
let computerGuess;
let minNum = 1;
let maxNum = 100;
let trialCount = 0;

computerGuess = Math.floor(Math.random() * maxNum + minNum);

guessBtn.addEventListener("click", () => {

  myGuess = Number(guessNumber.value);

  if (isNaN(myGuess) || myGuess < minNum || myGuess > maxNum) {
    guessResult.textContent = `Please enter a valid number between ${minNum} and ${maxNum}.`;
    guessResult.style.color = "red";
    guessResult.style.textAlign = "center";
    guessResult.style.margin = "1rem 0";
    return;
  }

  trialCount++;

  if (myGuess === computerGuess) {

    guessResult.textContent = `Correct!🎉 Your guess ${myGuess}  matches computer guess in ${trialCount} trial`;

    guessResult.style.color = "green";
    guessResult.style.textAlign = "center";
    guessResult.style.margin = "0 auto";
    guessResult.style.margin = "1rem 0";

  } else if (myGuess < computerGuess) {
    guessResult.textContent = `Your guess is too low, Try again!`;
    guessResult.style.color = "blue";
    guessResult.style.textAlign = "center";
    guessResult.style.margin = "1rem 0";
  } else {
    guessResult.textContent = `Your guess is too high, Try again!`;
    guessResult.style.color = "orange";
    guessResult.style.textAlign = "center";
    guessResult.style.margin = "1rem 0";
  }

  refreshGeuss.style.margin = "0";


  console.log(myGuess);
  console.log(computerGuess);
});

refreshGeuss.addEventListener("click", () => {

  computerGuess = Math.floor(Math.random() * maxNum + minNum);
  trialCount = 0;
  guessResult.textContent = "";
  guessNumber.value = "";
  refreshGeuss.style.margin = "2rem";
  console.log(computerGuess);

})
