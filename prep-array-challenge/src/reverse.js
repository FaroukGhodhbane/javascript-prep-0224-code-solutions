/* exported reverse */
/* reverse array */
function reverse(array) {
  let reverseArray = [];
  for (let index = array.length; index > 0; index--) {
    reverseArray.push(array[index - 1]);
  }
  return reverseArray;
}
