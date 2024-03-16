/* exported initial */
/* initial array */
function initial(array) {
  let initialArray = [];
  for (let index = 0; index < array.length - 1; index++) {
    initialArray.push(array[index]);
  }
  return initialArray;
}
