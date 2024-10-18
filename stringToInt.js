//Ignore any leading whitespace (" 0"). -> out 0
//ignore leading zero ("012") -> out 12

var myAtoi = function (s) {
    var addMinus = false;
    var newVal = '';
    var num = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

    if (s.startsWith("-")) {
        s = s.replace("-", '');
        addMinus = true;
    }

    for (var i = 0; i < s.length; i++) {
        if (s.startsWith(" ")) {
            s = s.replace(" ", '');
        }
        if (s.startsWith("0")) {
            s = s.replace("0", '');
        }
        if(typeof(s[i]) == String){
            s = 0;
            break;
        }
    }

    newS = s;

    var len = newS.length;
    for (var i = 0; i <= len; i++) {
        if (num.includes(newS[i])) {
            newVal = newVal + newS[i];
        }else{
             break;
        }
    }

    s = newVal;

    if (addMinus) {
        s = '-' + s;
    }
    return Number(s);
};

// console.log(myAtoi('001'))
console.log(myAtoi('bc'));
console.log(myAtoi('-041'));
console.log(myAtoi('00145gyhty9090'));