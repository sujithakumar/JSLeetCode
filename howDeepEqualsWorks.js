//explaining ===

var isEqual = function(inp1,inp2){

    console.log(typeof(inp1));
    console.log(typeof(inp2));
    console.log((inp1 == inp2) );
    if((inp1 == inp2) && typeof(inp1) == typeof(inp2)){
       return true;
    }
    else {
        return false;
    }

}

console.log(isEqual(NaN,NaN));

// console.log(isEqual(2,'2'));
// console.log(isEqual(2,1));
// console.log(isEqual(1,1));
// console.log(isEqual(NaN,'NAN'));
// console.log(isEqual(1.0,0.1));

