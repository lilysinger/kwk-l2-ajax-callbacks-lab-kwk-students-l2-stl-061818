$('#submitButton').click(function(){
     input = $('#searchRepositories').val()
     console.log(input)
     searchTerms(input)
 })

  function searchTerms(input){
        $.get({
            url: 'https://api.giphy.com/v1/gifs/search',
            dataType: 'json',
            data: {
              q: input ,
              limit: none ,
            },