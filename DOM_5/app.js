var insert_Row = function(){
    var table_1 = document.getElementById('sampleTable').firstElementChild;
    var new_line = document.createElement('tr')
    var colum_1 = document.createElement('td')
    var colum_2 = document.createElement('td')
    table_1.appendChild(new_line);
    new_line.appendChild(colum_1);
    new_line.appendChild(colum_2);
    colum_1.textContent = 'row3 cell 1'
    colum_2.textContent = 'row3 cell 2'
    
}
