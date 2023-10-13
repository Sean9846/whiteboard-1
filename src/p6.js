const input = "Hello, world!";
const result = findMaxOccurence(input);
console.log(result);
module.exports = findMaxOccurence;


function findMaxOccurence(input) {
    input = input.replace(/[^\w\s\']/g, "").replace(/ /g, "");

    const count = {}
    for (const char of input) {
        if (count[char]) {
            count[char]++;
        }
        else {
            count[char] = 1
        }
    }

    let maxChar = '';
    let maxCount = 0;

    for (const char in count) {
        if (count[char] > maxCount) {
            maxChar = char;
            maxCount = count[char];
        }
    }

    return {Character: maxChar, Occurrence: maxCount};
}