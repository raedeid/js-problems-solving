'Write a JavaScript program to test the first character of a string is uppercase or not'

var result = document.getElementById('answer');
var check = function (){
    event.preventDefault();
    var input = toString(document.getElementById('string').value)
    alert(input)
    var first = input.charAt(0)
    // console.log(input)
    if(first === first.toUpperCase()){
        result.textContent = `upper`
        
    }
    result.textContent = `not upper`
} 

// console.log(check('Raed'))
var button = document.getElementById('form')
button.addEventListener('submit',check)