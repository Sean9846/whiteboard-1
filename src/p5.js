const list1 = [4, 5, 2, 3, 1, 6];
const list2 = [8, 7, 6, 9, 4, 5];
const sorting = require('./p1');
console.log(sorting(symmetricDiff(list1, list2)));

module.exports = symmetricDiff;


function symmetricDiff(list1, list2) {
    const symmetricDiffNum = [];

    for (let i = 0; i < list1.length; i++) {
        if (!list2.includes(list1[i])) {
            symmetricDiffNum.push(list1[i]);
        }
    }

    for (let j = 0; j < list2.length; j++) {
        if (!list1.includes(list2[j])) {
            symmetricDiffNum.push(list2[j]);
        }
    }

    return symmetricDiffNum;
}