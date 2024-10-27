//explaining ===

var isEqual = function(inp1,inp2){

    if((inp1 == inp2) && typeof(inp1) == typeof(inp2)){
       return true;
    }
    else {
        return false;
    }

}

console.log(isEqual(NaN,NaN)); //results false - Comparing two NaNs doesn’t make sense because they could result from completely different operations.
console.log(isEqual(2,'2'));
console.log(isEqual(2,1));
console.log(isEqual(1,1));
console.log(isEqual(NaN,'NAN'));
console.log(isEqual(1.0,0.1));
//to compare arrays - try array.prototype.every() -> below will result in false ;

console.log((isEqual([1,2,3], ['1','2','3'])));
console.log((isEqual([1,2,3], [1,2,3])));

