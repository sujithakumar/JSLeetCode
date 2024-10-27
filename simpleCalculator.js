var calculate = function (s) {
    var str = s.split('');
    var calc = ["+", "-", "/", "%"];
    var result = 0;
    if (calc.includes(str[0])) {
        return 0;
    } else if (str.length >= 3) {
        for (var x = 0; x < str.length; x++) {
            if (calc.includes(str[x])) {
                result = calculator(str[x - 1], str[x + 1], str[x])
            }
        }
    }
    return result;
};

var calculator = function (a, b, symbol) {
    var result = 0;
    a = Number(a);
    b = Number(b);
    switch (symbol) {
        case "+":
            result = a + b;
            break;
        case "-":
            result = a - b;
            break;
        case "*":
            result = a * b;
            break;
        case "/":
            result = a / b;
            break;
        case "%":
            result = a % b;
            break;
        default:
            result = 0;
            break;
    }
    return result;
}

console.log(calculate("1+3"));
console.log(calculate("4+0"));
console.log(calculate("1-3"));
console.log(calculate("5-2"));
console.log(calculate("5*2"));
console.log(calculate("5/2"));
console.log(calculate("5%2"));

console.log(calculate("*2"));
console.log(calculate("2-1+2"));
console.log(calculate("3-1+2+2"));