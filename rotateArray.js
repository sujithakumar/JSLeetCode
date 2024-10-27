// Input: nums = [1,2,3,4,5,6,7], k = 3
// Output: [5,6,7,1,2,3,4]
// Explanation:
// rotate 1 steps to the right: [7,1,2,3,4,5,6]
// rotate 2 steps to the right: [6,7,1,2,3,4,5]
// rotate 3 steps to the right: [5,6,7,1,2,3,4]


var rotate = function (nums, k) {
  
    var len = nums.length;
    for (var a = 1; a <= k; a++) {
       nums.unshift(nums[len-1]);
       nums.pop();
    }
   
    console.log(nums);

};

rotate([1, 2, 3, 4, 5, 6, 7], 3);