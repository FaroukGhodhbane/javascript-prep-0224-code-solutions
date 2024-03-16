/* exported head */
/* first element */
function head(array) {
  return array[0];
}

/* last element */
function last(array) {
  return array[array.length - 1];
}

/* tail array */
function tail(array) {
  let tailArray = [];
  for (let index = 1; index < array.length; index++) {
    tailArray.push(array[index]);
  }
  return tailArray;
}

/* initial array */
function initial(array) {
  let initialArray = [];
  for (let index = 0; index < array.length - 1; index++) {
    initialArray.push(array[index]);
  }
  return initialArray;
}

/* reverse array */
function reverse(array) {
  let reverseArray = [];
  for (let index = array.length; index > 0; index--) {
    reverseArray.push(array[index - 1]);
  }
  return reverseArray;
}

/* compact array */
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
