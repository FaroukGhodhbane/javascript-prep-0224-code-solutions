const person = {
  firstName: 'Farouk',
  lastName: 'Ghodhbane',
  hobby: 'Soccer',
};
console.log(person);

const fullName = person.firstName + ' ' + person.lastName;
console.log("The person's name is: ", fullName);

person.job = 'Web Developer';
console.log("The person's current job is: ", person.job);

person['previousJob'] = 'Student';
console.log("The person's previous job is: ", person['previousJob']);

console.log('The complete person object is: ', person);
