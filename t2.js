function createCounter() {
    let count = 0;

    return function() {
        count++;
        return count;
    };
}
const myCounter = createCounter();

console.log(myCounter());
console.log(myCounter()); 
console.log(myCounter());