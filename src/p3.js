function Fibonacci(n) {
    if (n < 0) {
        return [];
    }
    else if (n == 1) {
        return[0];
    }
    else if (n == 2) {
        return[0, 1];
    }
    else {
        // recursion
        const num = Fibonacci(n - 1);
        // sum of two preceding num
        num.push(num[num.length - 1] + num[num.length - 2]);
        return num;
    }
}

const numOfElements = 3;
const sequence = Fibonacci(numOfElements);
console.log(sequence);
module.exports = Fibonacci;