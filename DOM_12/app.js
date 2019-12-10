'user strict '

var strong = document.getElementsByTagName('strong')
var highlight = function (){
    for (var i = 0 ;i < strong.length ; i++){
        strong[i].style.color = 'darkgreen'
    }
}
var return_normal = function (){
    for (var i = 0 ;i < strong.length ; i++){
        strong[i].style.color = 'white'
    }
} 
