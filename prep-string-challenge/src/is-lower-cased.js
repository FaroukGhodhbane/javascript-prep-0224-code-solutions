/* exported isLowerCased */
function isLowerCased(word) {
  for (let index = 0; index < word.length; index++) {
    if (word.charAt(index) !== word.charAt(index).toLowerCase()) {
      return false; // If any character is not lowercase, return false
    }
  }
  return true; // If all characters are lowercase, return true
}
