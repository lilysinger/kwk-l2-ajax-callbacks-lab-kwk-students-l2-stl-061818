$(document).ready(function (){
  $.ajax ({url: 'https://api.github.com/users/whatever?client_id=xxxx&client_secret=yyyy', success: function(result){
        $("#div1").html(result);
 }});
});
