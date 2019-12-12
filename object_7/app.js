'use strict'

var slicing = function(str){
    var subset = []
    for (var i = 0;i<str.length;i++){
        for(var n = i+1;n<str.length+1;n++){
            subset.push(str.slice(i,n))
        }
    }
    console.log(subset)
}


var string = 'confirm';
slicing(string);