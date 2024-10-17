// validate (),[],{}
// input s="(){}" -- valid
// input s="([])" -- valid
// input  s="{]{)" --invalid

var isValid = function(s) {
    obj = {
       "(": ")",
       "{": "}",
       "[": "]"
   }
   tempArr=[];

   for(var i=0; i < s.length; i++)
   {
       if(s[i] == "(" || s[i]=="{" ||s[i]=="[")
       {
           tempArr.push(s[i])
       }else if(s[i] != obj[tempArr.pop()]){
           return false;
       }
   }
   return tempArr.length === 0;
};

console.log(isValid("(){}"));
console.log(isValid("([])"));
console.log(isValid("{]{)"));