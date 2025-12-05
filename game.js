// get references
const btnPlay = document.getElementById("play-button");
const btnSelects = document.querySelectorAll("#rock, #paper, #scissors");
let userChoice = null;
const items = ["rock", "paper", "scissors"];

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
    userChoice = btn.id;
  });
});

//add event listener to play button
btnPlay.addEventListener("click", () => {
  if (!userChoice) {
    alert("please choose rock, paper or scissors!");
  }

  // randomly select item for computer
  const computerChoice = items[Math.floor(Math.random() * items.length)];

  if (userChoice === computerChoice) {
    results.textContent = `Computer: ${computerChoice}, ➡️ It's draw!`;
  } else if (
    (userChoice === "rock" && computerChoice === "scissors") ||
    (userChoice === "paper" && computerChoice === "rock") ||
    (userChoice === "scissors" && computerChoice === "paper")
  ) {
    results.textContent = `Computer: ${computerChoice} ➡️  You win! 🥳`;
    scoreUser += 1;
  } else {
    results.textContent = `Computer: ${computerChoice} ➡️ Computer wins! 😭`;
    scoreComputer += 1;
  }

  // display result and renew total score
  scoreUserTotal.textContent = scoreUser;
  scoreComputerTotal.textContent = scoreComputer;
  console.log("User's:", userChoice, "; Computer's:", computerChoice);
});
