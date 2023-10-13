const num = 16;
console.log(squareroot(num));
module.exports = squareroot;

function squareroot(num) {
    let a = 1;

    while (num > 0) { 
        num -= a; 
        a += 2; 
    }

    return Math.trunc(a/2);
}