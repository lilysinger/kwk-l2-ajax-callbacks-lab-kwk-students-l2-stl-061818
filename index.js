$(document).ready(function (){
  
} 
let url; 
 let input 
 $('#submitButton').click(function(){
     input = $('#searchTerms').val()
     console.log(input)
     searchRepositories(input)
 })

  function searchTerms(input){
        $.get({
            url: 'https://api.giphy.com/v1/gifs/search',
            dataType: 'json',
            data: {
              q: input ,
              limit: none ,
            },