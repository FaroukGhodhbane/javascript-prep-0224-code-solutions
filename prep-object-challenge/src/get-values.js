/* exported getValues */
function getValues(object) {
  array = [];
  for (const key in object) {
    array.push(object[key]);
  }
  return array;
}
