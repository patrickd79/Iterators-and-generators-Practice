/* function nameIterator(names) {
  let nextIndex = 0;

  return {
    next: function() {
      //if nextIndex is less than names.length ?(then)
      return nextIndex < names.length
        ? //returns an object value: names.length +1. done = false means that there is still more iteration to do
          { value: names[nextIndex++], done: false }
        : // this means else we want to return object done = true, which means we are done iterating through this
          { done: true };
    }
  };
}

//create an array of names
const namesArr = ["Jack", "Jill", "John"];
//Init iterator and pass the names array
const names = nameIterator(namesArr);
console.log(names.next().value);
//get next value in array
console.log(names.next().value);
//get next value in array
console.log(names.next().value);
 */

// generator example
// * tells JS that this function is a generator
/* function* sayNames() {
  yield "Jack";
  yield "Jill";
  yield "John";
}

const name = sayNames();

//gives same output as the iterator function in this case
console.log(name.next());
console.log(name.next().value);
console.log(name.next().value);
console.log(name.next().value);
 */

// ID Creator
function* createIds() {
  let index = 0;

  while (true) {
    yield index++;
  }
}
//every time you call the function it adds 1 to the ids.
const gen = createIds();

console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
