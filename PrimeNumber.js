function isPrime(n){
     if(n <2){
         return false
     }
     for(var i=2;i<n;i++){
          if(n % i ===0){
              return false
          }
     }
     return true
}
console.log(isPrime(6));
console.log(isPrime(5));
console.log(isPrime(4));

let inputValue= 6;
let isprime=inputValue==1? false:true;  //bcoz 1 is not prime

for(let i=2;i<inputValue;i++){
  inputValue%i==0? isprime*=false :isprime*=true;
};

alert(`${inputValue} is ${isprime? 'prime':'not prime'} number`);
