// Get strings from the command line
const sentance = process.argv.slice(2);
console.log("input: ", sentance);

// get inputs
const newSentance = [];
const words = sentance.forEach((word) => {
  const newWord = toPigLatin(word);
  // add new words to array
  newSentance.push(newWord);
});
// convert array to sentance
console.log("output: ", newSentance);
const pigLatinSentance = newSentance.join(" ");
console.log(pigLatinSentance);

//function for translations
function toPigLatin(word) {
  const vowels = ["a", "e", "i", "o", "u"];
  const firstChar = word[0].toLowerCase();
  const secondChar = word[1].toLowerCase();

  if (vowels.includes(firstChar)) {
    return word + "way";
  } else if (!vowels.includes(firstChar) && vowels.includes(secondChar)) {
    return word.slice(1) + firstChar + "ay";
  } else {
    return word.slice(2) + firstChar + secondChar + "ay";
  }
}
