const input1 = "debit card";
const input2 = "Bad credit";
const result = anagramChecker(input1, input2);
console.log(result);
module.exports = anagramChecker;

function anagramChecker(input1, input2) {
    input1 = input1.replace(/[^\w\s\']/g, "").replace(/ /g, "").toLowerCase();
    input2 = input2.replace(/[^\w\s\']/g, "").replace(/ /g, "").toLowerCase();

    if (input1.length != input2.length) {
        return false;
    }

    const count1 = {};
    const count2 = {};

    for (const char of input1) {
        if (count1[char]) {
            count1[char]++;
        }
        else {
            count1[char] = 1;
        }
    }

    for (const char of input2) {
        if (count2[char]) {
            count2[char]++;
        }
        else {
            count2[char] = 1;
        }
    }

    for (const char in count1) {
        if (count1[char] != count2[char]) {
            return false;
        }
    }

    return true;
}