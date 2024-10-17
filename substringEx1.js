//  Longest Substring Without Repeating Characters
// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.

var lengthOfLongestSubstring = function (s) {

    var result = '';
    var temp = s.split('');
    var len = temp.length;
    var temp1 = [];

    for (var i = 0; i < len; i++) {

        if ((temp[i] != temp[i - 1])) {
            if (!result.includes(temp[i])) {
                result = result + temp[i];
            }
        }
    }

    return result.length;

};


console.log(lengthOfLongestSubstring("abcabcbb"));
console.log(lengthOfLongestSubstring("abcdefghi"));
console.log(lengthOfLongestSubstring('bbbbb'));
console.log(lengthOfLongestSubstring('pwwkew'));
console.log(lengthOfLongestSubstring('abcooooooabcoooooabcd'));