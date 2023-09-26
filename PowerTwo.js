function isPowerOfTwo(number) {
    if (number <= 0) {
      return false; // Negative numbers and zero are not powers of two
    }
  
    // Calculate the logarithm to the base 2 and check if it's an integer
    return Math.log2(number) % 1 === 0;
  }
  
  // Example usage:
//   console.log(isPowerOfTwo(16)); // true, 16 is 2^4
//   console.log(isPowerOfTwo(3));  // false, 3 is not a power of two
//   console.log(isPowerOfTwo(1));  // true, 1 is 2^0
//   console.log(isPowerOfTwo(0));  // false, 0 is not a power of two
//   console.log(isPowerOfTwo(-8)); // false, negative numbers are not powers of two
  
  function isPowerOfTwos(n){
     if(n <0){
         return false
     }
     while(n>1){
         if(n%1 !==0){
             return false
         }
         n=n/2
     }
     return true
 }
 console.log(isPowerOfTwos(16));
 console.log(isPowerOfTwos(3));
 console.log(isPowerOfTwos(1));
 console.log(isPowerOfTwos(0));
 console.log(isPowerOfTwos(-8));
