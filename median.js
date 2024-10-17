// Input: nums1 = [1,2], nums2 = [3,4]
// Output: 2.50000
// Explanation: merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5.

var findMedianSortedArrays = function (nums1, nums2) {
    newArr = nums1.concat(nums2).sort();
    arrLen = newArr.length;
    len = arrLen / 2;
    if (arrLen % 2 == 0) {
        result = (Number(newArr[len]) + Number(newArr[len - 1])) / 2;
    }
    else {
        len = Math.floor(len);
        result = Number(newArr[len]);
    }

    console.log(result)
};

findMedianSortedArrays([1, 2], [3, 4]);
findMedianSortedArrays([1, 3], [2]);
findMedianSortedArrays([1, 5, 2], [3, 4]);
findMedianSortedArrays([1, 2, 3, 4, 5], [3, 4, 6, 7, 8]);