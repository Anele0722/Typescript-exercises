class Calculator {
    add(num1: number, num2: number): number {
        return num1 + num2;
    }

    minus(num1: number, num2: number): number {
        return num1 - num2;
    }

    divide(num1: number, num2: number): number {
        if (num2 === 0) {
            throw new Error("Division by zero is not allowed.");
        }
        return num1 / num2;
    }

    multiply(num1: number, num2: number): number {
        return num1 * num2;
    }
}

// usage example 
const calculator = new Calculator();

console.log(calculator.add(5, 3));      // Output: 8
console.log(calculator.minus(5, 3));    // Output: 2
console.log(calculator.divide(6, 3));   // Output: 2
console.log(calculator.multiply(5, 3)); // Output: 15

try {
    console.log(calculator.divide(6, 0)); // Throws an error
} catch (error) {
    console.error(error.message);             // Output: Division by zero is not allowed.
