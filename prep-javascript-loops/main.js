// create your loops here.
function whileLoop1() {
  const array = [];
  let index = 0;
  while (index < 10) {
    array.push(index);
    index++;
  }
  return array;
}
const whileLoop1Result = whileLoop1();
console.log('whileLoop1 output: ', whileLoop1Result);

/********************/

function whileLoop2() {
  const array = [];
  let index = 0;
  while (index < 20) {
    array.push(index);
    index += 2;
  }
  return array;
}
const whileLoop2Result = whileLoop2();
console.log('whileLoop2 output: ', whileLoop2Result);

/********************/

function forLoop1() {
  const array = [];
  for (let index = 0; index < 10; index++) {
    array.push(index);
  }
  return array;
}
const forLoop1Result = forLoop1();
console.log('forLoop1 output: ', forLoop1Result);

/********************/

function forLoop2() {
  for (let index = 100; index > 0; index--) {
    console.log('Time till explosion ', index);
  }
}
forLoop2();

/********************/

const person = {
  name: 'Ada LoveLace',
  age: 'classic',
  hobby: 'computation',
  invention: 'analytical engine',
};
function forInLoop1(object) {
  const array = [];
  for (const key in person) {
    array.push(key);
  }
  return array;
}
const forInLoop1Result = forInLoop1(person);
console.log('forInLoop1 output: ', forInLoop1Result);
/********************/
function forInLoop2(object) {
  const array = [];
  for (const key in person) {
    array.push(person[key]);
  }
  return array;
}
const forInLoop2Result = forInLoop2(person);
console.log('forInLoop2 output: ', forInLoop2Result);
