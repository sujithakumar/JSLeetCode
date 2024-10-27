//Fibonacci series
//0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89,

var fib = function (length) {
    var result =[0, 1, 1];
    var temp = 0;
    if (!length > 0) {
        return result;
    }

    if (length == 1) {
        result = [0];
    }
    if (length == 2) {
        result = [0, 1];
    }

    if (length > 2) {
        for (var i = 3; i < length; i++) {
            
            temp = result[i-1] + result[i-2];
            result.push(temp)
        }
    }

    return result;
}

console.log(fib(1));
console.log(fib(2));
console.log(fib(3));
console.log(fib(10));