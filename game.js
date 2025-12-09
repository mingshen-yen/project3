// get buttons
const btnPlay = document.getElementById("play-button");
const btnSelects = document.querySelectorAll("#rock, #paper, #scissors");

// get user's selection
let userChoice = null;

// possible game options for computer
const items = ["rock", "paper", "scissors"];

// elements for showing result and scores
const results = document.querySelector("#result");
const scoreUserTotal = document.querySelector("#user-score");
const scoreComputerTotal = document.querySelector("#computer-score");
let scoreUser = 0;
let scoreComputer = 0;

// add click listener to selection buttons
btnSelects.forEach((btn) => {
  btn.addEventListener("click", () => {
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
    return;
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
    scoreUser++;
  } else {
    results.textContent = `Computer: ${computerChoice} ➡️ Computer wins! 😭`;
    scoreComputer++;
  }

  // display result and renew total score
  scoreUserTotal.textContent = scoreUser;
  scoreComputerTotal.textContent = scoreComputer;
  console.log("User's:", userChoice, "; Computer's:", computerChoice);

  // reset selection
  btnSelects.forEach((btn) => btn.classList.remove("selected"));
  userChoice = null;
});
