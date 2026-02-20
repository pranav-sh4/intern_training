function calculate(a, b, operator) {
    const num1 = Number(a);
    const num2 = Number(b);

    if (isNaN(num1) || isNaN(num2)) return "Invalid numbers";

    switch (operator) {
        case '+': return num1 + num2;
        case '-': return num1 - num2;
        case '*': return num1 * num2;
        case '/': return num2 === 0 ? "Error: Division by zero" : num1 / num2;
        case '%': return num1 % num2;
        case '**': return num1 ** num2;
        default: return "Error: Invalid operator";
    }
}

console.log(calculate('10',' 5', '+'));
console.log(calculate(10, '5', '-'));
console.log(calculate(10, 5, '*'));
console.log(calculate(10, 5, '/'));
console.log(calculate(10, 3, '%'));
console.log(calculate(5, 5, '**'));
console.log(calculate(10, 0, '/')); 
console.log(calculate(10, 0, '$')); 