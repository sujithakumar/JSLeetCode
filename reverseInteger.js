// Input: x = -123
// Output: -321
// Input: x = 120
// Output: 21

var reverse = function (x) {
    var addMinus = false;
    var result;
    if (Math.sign(x) == -1) {
        addMinus = true;
    }

    //check for zero
    x = x.endsWith(0) ? x.substring(0,x.length - 1) : x


    var arr = x.toString().split('');
    if (addMinus) {
        arr.shift();
        result = '-' + Number(arr.reverse().toString().replaceAll(",", ''));
    } else {
        result = Number(arr.reverse().toString().replaceAll(",", ''));
    }

    return result;

};

console.log(reverse('-123'));
console.log(reverse('123'));
console.log(reverse('120'));
console.log(reverse('1200'));
console.log(reverse('1200123'));
console.log(reverse('-1200'));