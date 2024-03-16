/* exported reverseWord */
function reverseWord(word) {
  newWord = word.charAt(word.length - 1);
  for (index = word.length - 2; index >= 0; index--) {
    newWord += word.charAt(index);
  }
  return newWord;
}
