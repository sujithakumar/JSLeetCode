// Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
// Output: [1,2,2,3,5,6]
// Explanation: The arrays we are merging are [1,2,3] and [2,5,6].
// The result of the merge is [1,2,2,3,5,6] with the underlined elements coming from nums1.

// Input: nums1 = [1], m = 1, nums2 = [], n = 0
// Output: [1]
// Input: nums1 = [0], m = 0, nums2 = [1], n = 1
// Output: [1]

var merge = function(nums1, m, nums2, n) {
    var temp=[];
    if(m==0){
        nums1 =  nums2;
    }else if(n==0){
        nums1  = nums1;
    }else{
       temp = [...redefine(nums1,m),...redefine(nums2,n)];
       nums1.length = 0;
       nums1 = temp.sort();
    }
    console.log(nums1);
};

function redefine(arr, count){
    var temp =[];
    for(var a=0; a<count; a++){
        temp.push(arr[a]);
    }
    return temp;
}

merge([0],0,[1],1);
merge([1],1,[0],0);
merge([1,2,3,0,0,0],3,[2,5,6],3);