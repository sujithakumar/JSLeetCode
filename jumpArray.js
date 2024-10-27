var canJump = function(nums) {
    result = false;
    nums = [2,3,1,1,4];
    len = nums.length;
    lastVal = nums[len-1];
    var jump = 0;
    if(jump <= lastVal){
        temp= nums[jump];
        jump = temp;
        temp=0;
        if(jump==lastVal){
             result = true;
        }
    }
    return result;
    
};

console.log(canJump([2,3,1,1,4]));