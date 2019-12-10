'use strict'
var getOptions = function(){
    var select = document.getElementsByTagName('option');
    var total = 0
    // alert(select)
    console.log(select)
    for (var i=0;i<select.length;i++){
        console.log(select[i].textContent)
        total = total + 1
        alert(total)
        alert(select[i].textContent)
    }
    // alert(total)

}