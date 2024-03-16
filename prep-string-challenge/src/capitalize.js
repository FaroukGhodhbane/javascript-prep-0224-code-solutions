/* exported capitalize */
function capitalize(word) {
  let newWord = word.charAt(0).toUpperCase();
  for (let index = 1; index < word.length; index++) {
    // Check if the current character is uppercase
    if (word.charAt(index) === word.charAt(index).toUpperCase()) {
      // If it is uppercase, concatenate with its lowercase version to the new string
      newWord += word.charAt(index).toLowerCase();
    } else {
      // If it is not uppercase, concatenate it to the new string
      newWord += word.charAt(index);
    }
  }
  return newWord;
}
