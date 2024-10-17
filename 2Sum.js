//input = [2,7,11,15,3], target=5 , output = [0,5]

var twoSum = function(inArr, target){
    len = inArr.length;
    result = [];
    for(var i=0; i<len; i++){
        for (var j=i+1; j<=len; j++){
            if(inArr[i] +inArr[j] == target){
                result.push(i);
                result.push(j);
            }
        }
    }
    return result;
}

console.log(twoSum([2,7,11,15,3],5))
console.log(twoSum([2,7,21,14,100],16))
console.log(twoSum([10,2,1],3))