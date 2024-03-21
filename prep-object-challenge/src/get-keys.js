/* exported getKeys */
function getKeys(object) {
  array = [];
  for (const key in object) {
    array.push(key);
  }
  return array;
}
