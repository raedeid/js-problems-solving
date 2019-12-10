'use strict'
function random(){
    return Math.floor (Math.random()*3 )
}
var obj = [{src:'http://farm4.staticflickr.com/3691/11268502654_f28f05966c_m.jpg',width:'240px',height:'160px'},
{src:'http://farm1.staticflickr.com/33/45336904_1aef569b30_n.jpg',width:'320px',height:'250px'},
{src:'http://farm6.staticflickr.com/5211/5384592886_80a512e2c9.jpg',width:'500px',height:'343px'}]


var Random_image = function(){
    var pic = document.getElementsByTagName('img')[0];
    var rand = obj[random()];
    pic.setAttribute('src',`${rand.src}`)
    pic.setAttribute('width',`${rand.width}`)
    pic.setAttribute('height',`${rand.height}`)

}


