function factorailNumber(n){
     let result=1;
     for(var i=2;i<n;i++){
          result = result *i
     }
     return result
}
console.log(factorailNumber(8));
