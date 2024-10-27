// Input: 
// nums = [1,2,3,4]
// fn = function sum(accum, curr) { return accum + curr * curr; }
// init = 100
// Output: 130
// Explanation:
// initially, the value is init=100.
// (100) + nums[0] * nums[0] = 101
// (101) + nums[1] * nums[1] = 105
// (105) + nums[2] * nums[2] = 114
// (114) + nums[3] * nums[3] = 130
// The final answer is 130.

var reduce = function(nums, fn, init) {
   var  result =init;
   for(var i=0; i < nums.length ; i++){
       var element= nums[i];
       console.log(element);
       result = fn(result,element);
       console.log(result);
   }
   return result;
};

console.log(reduce([1,2,3,4],function sum(accum, curr) { return accum + curr * curr; },100));