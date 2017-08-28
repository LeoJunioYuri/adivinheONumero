//generate a random number
var num = Math.floor(Math.random()*10);
function play() 
{
    guess = document.getElementById("guess").value;
    result = document.getElementById("result");
  //se o número digitado for o gerado
    if (guess == num)
    {
        result.innerHTML += "<strong>Correto!<strong><br />";
    } 
  
  //se o numero digitado for maior
    else if (guess > num) 
    {
        result.innerHTML+= "Muito alto! Tente novamente<br />";
    } 
  //se o numero digitado for menor
    else 
    {
        result.innerHTML+= "Muito baixo! Tente novamente<br />";
    }
}



//parte visual 
var main = function() {

    $('form').submit(function(event) {
        var $input = $(event.target).find('input');
        var comment = $input.val();

        if (comment != "") {
            var html = $('<li>').text(comment);
            html.prependTo('#comments');
            $input.val("");
        }

        return false;
    });

}

$(document).ready(main);
