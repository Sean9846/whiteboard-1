const input = [21, 400, 8, -3, 77, 99, -16, 55, 111, -36, 28];
const sortedNum = sorting(input);
// console.log(sortedNum);

module.exports = sorting;

function sorting(inputArr) {
    const n = inputArr.length;
    let check;

    do {
      check = false;
      for (let i = 0; i < n - 1; i++) {
        if (inputArr[i] > inputArr[i + 1]) {
          // swap the number
          const temp = inputArr[i];
          inputArr[i] = inputArr[i + 1];
          inputArr[i + 1] = temp;
          check = true;
        }
      }
    } while(check)
  
    return inputArr;
  }  