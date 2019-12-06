'Write a JavaScript program to calculate multiplication and division of two numbers (input from user)'


var body = document.getElementById('body');
var butoon_1 = document.getElementById('multiply')
var butoon_2 = document.getElementById('divided')
var multiply = function (){
    event.preventDefault();
    alert('hi')
    var first = parseInt(document.getElementById('first').value)
    console.log(first);   
    var seconed = parseInt(document.getElementById('seconed').value)
    var result = document.getElementById('result')
    result.textContent = `${first*seconed}`
    
}
var divided = function (){
    event.preventDefault();
    var first = parseInt(document.getElementById('first').value)
    console.log(first)   
    var seconed = parseInt(document.getElementById('seconed').value)
    var result = document.getElementById('result')
    result.textContent = `${first/seconed}`
}
