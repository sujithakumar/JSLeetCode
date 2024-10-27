var letterCombinations = function (digits) {

    var result = [];
    var obj = {
        2: "abc",
        3: "def",
        4: "ghi",
        5: "jkl",
        6: "mno",
        7: "pqrs",
        8: "tuv",
        9: "wxyz"
    };

    var len = digits.toString().length;

    if (len == 1) {
        result = obj[digits].split('');
    } else if (len > 1) {
        var digitsaArr = digits.toString().split('');
        var digitsArrLen = digitsaArr.length;
        var valueArr = [];

        for (var i = 0; i < digitsArrLen; i++) {
            valueArr[i] = obj[digitsaArr[i]].toString().split('');
        }


        for (var x = 0; x < valueArr.length; x++) {
            if(x==valueArr.length-1){
                break;
            }
            var temp1 = valueArr[x];
            var temp2 = valueArr[x + 1];
            var res = "";
            for (var a = 0; a < temp1.length; a++) {
                for (var b = 0; b < temp2.length; b++) {
                    res = temp1[a] + temp2[b];
                        result.push(res);
                }
            }
        }
    }


    return result;

};

console.log(letterCombinations(23));

// console.log(letterCombinations(""));
// console.log(letterCombinations(2));

