function binarySearch(arr,target){
     let right =arr.length-1;
      for(var left=0;left<right;){
        const mid = Math.floor((left + right) / 2);
        if (arr[mid]=== target ){
            return mid; // Found the target element, return its index
        }else if(arr[mid]<target){
             left = mid+1;
        }else{
             right = mid-1
        }
    }
    return -1
}
const sortedArray = [1, 3, 5, 7, 9, 11, 13, 15];
const target = 11;
const index = binarySearch(sortedArray, target);
if (index !== -1) {
    console.log(`${target} found at index ${index}`);
  } else {
    console.log(`${target} not found in the array`);
  }