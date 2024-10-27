//arr = [0,10,20,30], fn = function greaterThan10(n) { return n > 10; }
// Output: [20,30]
// Explanation:
// const newArray = filter(arr, fn); // [20, 30]
// The function filters out values that are not greater than 10


var filter = function(arr, fn) {

    result =[];
    for(var i=0; i < arr.length ; i++){
        var element= arr[i];
        if( fn(element)){
            result.push(element);
        }
    }
    return result;
};

console.log(filter([0,10,20,30],function greaterThan10(n) { return n > 10; }));