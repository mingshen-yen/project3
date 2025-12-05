// get references
const btnPlay = document.getElementById("play-button");
console.log(btnPlay);
const btnSelects = document.querySelectorAll("#rock, #paper, #scissors");
console.log(btnSelects);
let selectedChoice = null;
items = ["rock", "paper", "scissors"];
const results = document.querySelector("#result");
const scoreUserTotal = document.querySelector("#user-score");
const scoreComputerTotal = document.querySelector("#computer-score");
let scoreUser = 0;
let scoreComputer = 0;

// add click listener to selection button
btnSelects.forEach((btn) => {
  btn.addEventListener("click", () => {
    //remove previous selection
    btnSelects.forEach((b) => {
      b.classList.remove("selected");
    });

    //mark as selected
    btn.classList.add("selected");

    //save value
    selectedChoice = btn.id;
    console.log("user's choice:", selectedChoice);
  });
});

//add event listener to play button
btnPlay.addEventListener("click", () => {
  if (!selectedChoice) {
    alert("please choose rock, paper or scissors!");
  }

  // randomly select item for computer
  const randomItem = items[Math.floor(Math.random() * items.length)];
  console.log("computer's choice: ", randomItem);

  if (selectedChoice === randomItem) {
    results.textContent = `Yours: ${selectedChoice}, Computer: ${randomItem}, ➡️ It's a tie!`;
  } else if (
    (selectedChoice === "rock" && randomItem === "scissors") ||
    (selectedChoice === "paper" && randomItem === "rock") ||
    (selectedChoice === "scissors" && randomItem === "paper")
  ) {
    results.textContent = `Yours: ${selectedChoice}, Computer: ${randomItem} ➡️  You win! 🥳`;
    scoreUser += 1;
  } else {
    results.textContent = `Yours: ${selectedChoice}, Computer: ${randomItem} ➡️ Computer wins! 😭`;
    scoreComputer += 1;
  }

  // display result and renew total score
  scoreUserTotal.textContent = scoreUser;
  scoreComputerTotal.textContent = scoreComputer;
});
