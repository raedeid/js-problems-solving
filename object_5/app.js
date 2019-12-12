'use strict'

var caluclateSphare = function(obj){
    for (var i = 0;i < obj.length ; i++){
        var rad = obj[i].raduis
        var high = obj[i].height
        console.log(Math.PI * Math.pow(rad,2)*high)
    }

}




var measure = [
    {raduis : 5,height:6},
    {raduis : 6,height:7},
    {raduis :7,height:8}
];

caluclateSphare(measure);