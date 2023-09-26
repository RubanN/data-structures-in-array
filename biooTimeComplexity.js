function summation(n){
        var sum=0;
        for(var i=1;i<=n;i++){
             sum+=i              
            //   ---------------> Linear complexity
        }
        return sum
}
// console.log(summation(5));

function summation1(n){
       return (n *(n+1))
      //  -------------------------> constant Complexity
}
// console.log(summation1(2));
