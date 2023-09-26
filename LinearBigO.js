// Linear Big(o);
function linearSearch(array,value){
     for(var i=0;i < array.length;i++){
        if (array[i] === value) {
            return true;
          }
     }
     return false;

}
// console.log(linearSearch([123])); 