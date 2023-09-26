let str1 = "madam";
let str2 = "aaabbb";
function findPalindrome(input){
  return input === input.split('').reverse().join('')
}
// console.log(findPalindrome(str2));

const str = window.prompt("enter a value");
function findPalindrome1(input){
       let left =0;
       let right = input.length-1;
    //    while (left <right) {
    //        if(input[left] !== input[right]){
    //          return false
    //        }
    //        left++;
    //        right--;
    //    }
    //    return true
    for(let left=0;left<right;left++,right--){
        if (input[left] !== input[right]) {
            return false;
          }
    }
    return true;

}
console.log(findPalindrome1(str));