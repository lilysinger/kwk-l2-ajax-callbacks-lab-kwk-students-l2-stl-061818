$(document).ready(function (){
  
});

  function searchGif(input){
        $.get({
            url: 'https://api.giphy.com/v1/gifs/search',
            dataType: 'json',
            data: {
              api_key: '6ed527871fd940718d7913b1cf4751f6',
              q: input ,
              limit: 3,
              rating: 'PG-13'
            },