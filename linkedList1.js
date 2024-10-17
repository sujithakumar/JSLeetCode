// Input: l1 = [2,4,3], l2 = [5,6,4]
// Output: [7,0,8]
// Explanation: 342 + 465 = 807.

var addTwoNumbers = function(l1, l2) {
    num1 = Number(l1.reverse().toString().replaceAll(",", ''));
    num2 = Number(l2.reverse().toString().replaceAll(",", ''));
    sum = (num1 + num2).toString().split('').reverse();
    sum = sum.map((x) => Number(x));
    return sum;
};

console.log(addTwoNumbers([2,4,3],[5,6,4]));
console.log(addTwoNumbers([0],[0]));
console.log(addTwoNumbers([9,9,9,9,9,9,9],[9,9,9,9]))