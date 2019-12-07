
' Write a JavaScript function to get the values of First and Last name of the following form'
var getFormvalue = function (){
    event.preventDefault();
    var form1 = document.getElementById('form1');
    for(var i=0;i<form1.length;i++){
        if(form1.elements[i].value != 'Submit'){
            console.log(form1.elements[i].value)
        }
    }
}
