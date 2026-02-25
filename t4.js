function createUser({ name, age=18 }) {
    return {
        name: name,
        age: age,
        isAdult: age >= 18
    };
}

console.log(createUser({ name: "Pranav", age: 21 }));
console.log(createUser({ name: "Guest" }));
console.log(createUser({ name: "Jake", age: 13 }));