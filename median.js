// Input: nums1 = [1,2], nums2 = [3,4]
// Output: 2.50000
// Explanation: merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5.

var findMedianSortedArrays = function (nums1, nums2) {
    newArr = (nums1.concat(nums2)).sort(function(a, b){return a-b});
    arrLen = newArr.length;
    len = arrLen / 2;
    if (arrLen % 2 == 0) {
        result = (Number(newArr[len]) + Number(newArr[len - 1])) / 2;
    }
    else {
        console.log(newArr)
        len = Math.floor(len);
        console.log(len)
        result = Number(newArr[len]);
    }

    console.log(result)
};

findMedianSortedArrays([1, 2], [3, 4]);
findMedianSortedArrays([1, 3], [2]);
findMedianSortedArrays([1,2,3,4,5], [6,7,8,9,10,11,12,13,14,15,16,17]);
findMedianSortedArrays([1, 2, 3, 4, 5], [3, 4, 6, 7, 8]);