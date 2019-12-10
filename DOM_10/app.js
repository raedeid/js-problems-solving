'use strict'
var calculate = function(){
    var raduis = document.getElementsByTagName('input')
    var volume = 4/3 * Math.PI * Math.pow(parseInt(raduis[0].value),3)
    raduis[1].value = volume
}