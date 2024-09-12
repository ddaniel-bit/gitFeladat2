function getFirstElement(arr) {
    //ide írd kódod
}
const numbers = [1, 2, 3];
const words = ["apple", "banana", "cherry"];
console.log(`First number: ${getFirstElement(numbers)}`);
console.log(`First word: ${getFirstElement(words)}`);

export function factorial(n) {
    if (n === 0 || n === 1) return 1;
    return n * factorial(n - 1);
}

console.log(`Factorial of 5: ${factorial(5)}`);
