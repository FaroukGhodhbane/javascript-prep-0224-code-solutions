/* exported compact */
function compact(array) {
  for (let index = 0; index < array.length; index++) {
    if (!array[index]) {
      for (let j = index; j < array.length - 1; j++) {
        array[j] = array[j + 1];
      }
      array.length--;
      index--;
    }
  }
  return array;
}
