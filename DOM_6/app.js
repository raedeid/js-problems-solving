var changeContent = function(){
    var row = parseInt(prompt('which row ?'))
    var colum = parseInt(prompt('which coloum ?'))
    var text = prompt('the text of cell')
    var myTable = document.getElementsByTagName('tr')[row].childNodes
    for(var i=0;i<myTable.length;i++){
        if(i === colum){
            myTable[i].textContent = text
        }
    }   
}