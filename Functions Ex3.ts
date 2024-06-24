// 1. Function that takes two numbers and returns their sum
function addNumbers(num1: number, num2: number): number {
    return num1 + num2;
}

// 2. Function that returns a fixed number
function getFixedNumber(): number {
    return 10;
}

// 3. Function that takes a string and an optional boolean parameter
function manipulateString(inputString: string, toUppercase: boolean = false): string {
    return toUppercase ? inputString.toUpperCase() : inputString.toLowerCase();
}
