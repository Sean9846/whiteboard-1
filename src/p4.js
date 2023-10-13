const list1 = [4, 5, 2, 3, 1, 6];
const list2 = [8, 7, 6, 9, 4, 5];
console.log(intersection(list1, list2));
module.exports = intersection;

function intersection(list1, list2) {
    const intersectionNum = [];

    for (let i = 0; i < list1.length; i++) {
        for (let j = 0; j < list2.length; j++) {
            if (list1[i] == list2[j]) {
                intersectionNum.push(list1[i]);
            }
        }
    }

    return intersectionNum;
}