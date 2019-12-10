var createTable = function (){
    var rowsNumber = parseInt(prompt('how many numbers ?'))
    var columnsNumber = parseInt(prompt('how many columns ?'))
    var myTable = document.getElementById('myTable');
    for(var i=0;i<rowsNumber;i++){
        var new_row = document.createElement('tr')
        myTable.appendChild(new_row)
        for(var w=0;w<columnsNumber;w++){
            var new_columns = document.createElement('td')
            new_row.appendChild(new_columns)
            new_columns.textContent = `Row no: ${i+1},Col no: ${w+1}`
        }
    }
}