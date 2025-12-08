// Get strings from the command line
const sentance = process.argv[2];
const shift = Number(process.argv.slice(-1));
console.log("input: ", sentance);

// get each word in the sentance
// const words = sentance.split("");
// console.log(words);
// const shiftWords = words.map((char) => shiftChar(char, shift));
// console.log(shiftWords);
// const newSentance = shiftWords.join("");
// console.log(newSentance);

// function for position the english alphabet
function shiftChar(char, shift) {
  const alph = "abcdefghijklmnopqrstuvwxyz";

  const index = alph.indexOf(char.toLowerCase());
  if (index === -1) return char; // not a letter

  const newIndex = (index + shift) % 26; // shift by index
  return alph[newIndex];
}

// shift the letters
function shiftWord(words, shift) {
  return words
    .split("") // split letters
    .map((char) => shiftChar(char, shift)) // shift letter by shift number
    .join(""); // join letters back
}

console.log(shiftWord(sentance, shift));
