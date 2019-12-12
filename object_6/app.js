'use strict'
var bubleSort = function(arr){
    var test= true
    while(test){
        test = false
        for (var i=0;i<arr.length-1;i++){
            if (arr[i]>arr[i+1] ){
                var first = arr[i];
                var seconed = arr[i+1];
                arr[i] = seconed
                arr[i+1] = first
                test =true
    
            }
        }
    }
    return arr

}
var unsorted = [6,4,0, 3,-2,1];
console.log(bubleSort(unsorted));
