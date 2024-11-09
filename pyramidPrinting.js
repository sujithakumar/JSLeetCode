// Print the below:
// ***1***
// **121**
// *12321*
// 1234321

function pyramid(lenOfPyramid) {
    let result;
    let numOfNumbers = 1;//starts with 1 number 
    var median = Math.floor(lenOfPyramid / 2);
    var starArr = printStars(lenOfPyramid);
    var minNum = 1;
    //Zero or even no dont participate
    if (lenOfPyramid == 0 || lenOfPyramid % 2 == 0) {
        console.log("Even Nos cannot print pyramid");
        return;
    }
    console.log("printing pyramid of size", lenOfPyramid);
    if (numOfNumbers == 1) {
        starArr[median] = minNum;
    }

    if (lenOfPyramid > 1) {
        for (var a = 0; a < numOfNumbers && numOfNumbers <= lenOfPyramid; a++) {
            for (var j = 1; j < numOfNumbers; j++) {
                if (minNum - j > 0) {
                    starArr[median - j] = minNum - j;
                    starArr[median] = minNum;
                    starArr[median + j] = minNum - j;
                }
            }
            numOfNumbers = numOfNumbers + 2;
            minNum = minNum + 1;
            result = starArr.toString().replaceAll(',', '');
            console.log(result);
        }
    }
}

function printStars(count) {
    var out = [];
    for (var x = 0; x < count; x++) {
        out.push("*");
    }
    return out;
}

pyramid(7);
pyramid(9);