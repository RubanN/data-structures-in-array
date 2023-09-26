function fibonacci(n){
     if(n<=0){
         return 0
     }else if(n===1){
         return 1
     }else{
         return fibonacci(n-1) +fibonacci(n-2)
     }
}
const n = 7; // Replace with the desired Fibonacci number you want to calculate
const result = fibonacci(n);
// console.log(`The ${n}th Fibonacci number is: ${result}`);

function myFuncFiboacci(n){
     if(n<2){
         return n
     }
     return myFuncFiboacci(n-1) + myFuncFiboacci(n-2)
}
console.log(myFuncFiboacci(0));
console.log(myFuncFiboacci(1));
console.log(myFuncFiboacci(6));
