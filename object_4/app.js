// Write a JavaScript program to display the reading status (i.e. display book name, author name and reading status) of the following books
'use strict'

var reading = function(arr){
    for(var i = 0;i < arr.length ; i++){
        console.log(arr[i].author);
        console.log(arr[i].title);
        console.log(arr[i].readingStatus);
    }

}

var library = [ 
    {
        author: 'Bill Gates',
        title: 'The Road Ahead',
        readingStatus: true
    },
    {
        author: 'Steve Jobs',
        title: 'Walter Isaacson',
        readingStatus: true
    },
    {
        author: 'Suzanne Collins',
        title:  'Mockingjay: The Final Book of The Hunger Games', 
        readingStatus: false
    }];
reading(library);    