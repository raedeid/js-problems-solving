'use strict'
var getAttributes  =  function(){
    var text = document.getElementById('w3r')
    for (var i=0;i<text.attributes.length;i++){
        console.log(text.attributes[i].textContent)

    }

    // alert (text);

}


