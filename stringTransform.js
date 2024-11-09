
// Input: s = "abcyy", t = 2, nums = [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2]
// Output: 7

// Input: s = "azbk", t = 1, nums = [2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2]
// Output: 8

var lengthAfterTransformations = function(s, t, nums) {
    var char = 'abcdefghijklmnopqrstuvwxyz'.split('');  
    s =s.toLowerCase();
    var result =0;
    var temp= 1;
    var temp1 =1;
    var split = s.split('');
    var val = [];
   
    
    while(temp <= t){
        for(var x=0; x<split.length; x++){
            var charIndex =  char.findIndex(v => v.includes(split[x]));
            //get the value in nums using charIndex
            var num = nums[charIndex];
            while(temp1 <= num){
                val.push(char[temp1+1]);
                temp1++;
            }
        }
        temp++;
    }
    result = val.length || 0;
    return result;
};

console.log(lengthAfterTransformations("abcyy", 2, [1,1,1,1,1,1,1,1,1,1,1,1,1]));