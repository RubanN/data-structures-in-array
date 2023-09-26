function fibonacciSequence(n){
     const fib =[0,1];
     for (let i=2;i<= n ;i++) {
        fib[i] = fib[i-1] +fib[i-2]
     }
     return fib
}
console.log(fibonacciSequence(2)); //[1,2]
console.log(fibonacciSequence(3));// [0,1,1]
console.log(fibonacciSequence(7));//[0,1,1,2,3,5,8]

const number = window.parseInt(prompt("please enter value"))
let n1=0,n2=1, nextTerm;
for(var i=0;i<number;i++){
     nextTerm = n1+n2;
     n1=n2;
     n2=nextTerm;
}

let n1=1; n2=0; 
let nextTerm;
let n=7;
for(var i=2;i<n;i++){
      nextTerm = n1+n2;
      n1 =n2;
      n2 =nextTerm;
      console.log("The "+i+" term is: " +nextTerm);
}