// 1 <= s.length <= 20
// 1 <= p.length <= 20
// s contains only lowercase English letters.
// p contains only lowercase English letters, '.', and '*'.
//'*' means zero or more of the preceding element,
//".*" means "zero or more (*) of any character (.)".
// It is guaranteed for each appearance of the character '*', there will be a previous valid character to match.

var isMatch = function (s, p) {
    s = s.toLowerCase();
    p = p.toLowerCase();
    var index, tempChar;
    if (s.length > 0 && p.length > 0 && s.length <= 20 && p.length <= 20) {
        if (p.indexOf('*') >= 0) {
            index = p.indexOf('*') - 1;
            tempChar = p.charAt(index);
            p = p.replace('*', tempChar);
        }
        if (p.indexOf('.') >= 0) {
            index = p.indexOf('.') + 1;
            tempChar = p.charAt(index);
            if (tempChar == '.') {
                return true
            }
            else {
                return false;
            }
        }
        if (s == p) {
            return true;
        } else {
            return false;
        }
    }
};


console.log(isMatch('ab', '.*'));// the .* will be considered as ..
console.log(isMatch('aa', 'aa'));
console.log(isMatch('aa', 'a*'));//a* will be considered as aa
