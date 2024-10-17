//  Longest Substring Without Repeating Characters
// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.

var lengthOfLongestSubstring = function(s) {
    var len = s.length;
    var arr = [];
    for(var i=0; i<len; i++){
        if(i==0){
            arr.push(s[i]);
        }else{
            for(var j=0; j<arr.length; j++){
                if(s[i] != arr[j]){
                    arr.push[s[i]];
                }
            }
        }
    }
    return arr.length;
};

console.log(lengthOfLongestSubstring("abcabcbb"))