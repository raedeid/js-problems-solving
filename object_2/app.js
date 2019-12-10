'use strict'
var delete_property = function(obj,property){
    var list = Object.keys(obj);
    var position = list.indexOf(property);
    var before = position -1;
    delete obj.property;
    console.log(obj[list[before]]);
    console.log(obj[list[position]])
    
} 
var student = {
    name : "David Rayy",
    sclass : "VI",
    rollno : 12 };

delete_property(student,'rollno');