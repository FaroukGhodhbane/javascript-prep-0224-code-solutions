/* exported isUpperCased */
function isUpperCased(word) {
  let track = 1;
  for (let index = 0; index < word.length; index++) {
    if (word.charAt(index) === word.charAt(index).toUpperCase()) {
      track = 1;
    } else {
      track++;
    }
  }
  if (track == 1) {
    return true;
  } else {
    return false;
  }
}
