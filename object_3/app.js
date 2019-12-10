'use strict'
var get_length = function(obj){
    var keys_object = Object.keys(obj);
    console.log(keys_object.length)
}

var student = {
    name : "David Rayy",
    sclass : "VI",
    rollno : 12 };

get_length(student);    