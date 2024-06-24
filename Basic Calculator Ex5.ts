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