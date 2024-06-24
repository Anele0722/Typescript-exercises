// 1. Function that takes two numbers and returns their sum
function addNumbers(num1: number, num2: number): number {
    return num1 + num2;
}

// 2. Function that returns a fixed number
function getFixedNumber(): number {
    return 10;
}

// 3. A function that takes a string and an optional boolean parameter. If the boolean
// is true, returns the string in uppercase; otherwise, returns it in lowercase.
function manipulateString(input: string, toUpperCase?: boolean): string {
    if (toUpperCase) {
        return input.toUpperCase();
    } else {
        return input.toLowerCase();
    }
}
