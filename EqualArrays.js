function arraysEqual(arr1, arr2) {
    if (arr1.length !== arr2.length) {
      return false; // Arrays are not equal if lengths are different
    }
  
    return arr1.every((value, index) => value === arr2[index]);
  }
  
  // Example usage:
  const array1 = [1, 2, 3];
  const array2 = [1, 2, 3];
  const array3 = [1, 2, 4];
  
  console.log(arraysEqual(array1, array2)); // true
  console.log(arraysEqual(array1, array3)); // false