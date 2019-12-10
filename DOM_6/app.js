var changeContent = function(){
    var row = parseInt(prompt('which row ?'))
    var colum = parseInt(prompt('which coloum ?'))
    var text = prompt('the text of cell')
    var myTable = document.getElementsByTagName('tr')[parseInt(row)].cells[parseInt(colum)]
    myTable.textContent = text
}