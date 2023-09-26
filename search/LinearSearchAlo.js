function linearSearch(arr, item) {
    // Go through all the elements of arr to look for item.
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] === item) {
        return i;
      }
    }
    // Item not found in the array.
    return null;
  }
  
  console.log(linearSearch([12, 14, 39, 9, 0, 21, 22, 67, 3, 4, 5], 9));
  