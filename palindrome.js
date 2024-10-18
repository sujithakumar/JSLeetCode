//121 = true
//-121 = false  , coz on reverse it is 121-


var isPalindrome = function(x) {
    var result = false;
    var num = x.toString().split('').reverse().join('');
    if(x === Number(num)){
        result = true;
    }

    return result;
};


console.log(isPalindrome("1234"));
console.log(isPalindrome("-121"));
console.log(isPalindrome("121"));
console.log(isPalindrome("malayalam"));
