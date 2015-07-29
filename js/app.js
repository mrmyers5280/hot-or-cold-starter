$(document).ready(function(){

    var randNum, guessNum;

    /*--- Display information modal box ---*/
    $(".what").click(function(){
        $(".overlay").fadeIn(1000);
    });
    /*--- Hide information modal box ---*/
    $("a.close").click(function(){
         $(".overlay").fadeOut(1000);
    });

    $('a.new').click(function() {
        logIt("New Game button clicked.")
        newGame(randomNum());
    });
    function newGame(number) {
        logIt("In newGame function.");
        logIt("number is: " + number);
    }
    function randomNum() {
        randNum = Math.floor((Math.random() * 100) + 1);
        logIt("num is: " + randNum);
        return randNum;
    }
    $('#guessButton').click(function() {
        logIt("Guess button clicked.");
        guessNum = parseInt($("#userGuess").val(), 10);
        logIt("guessNum is: " + guessNum);
        // howClose(randNum, guessNum);
        // testing logic goes here.
        // add number to user guessList.
    });
    function logIt(message) {
        console.log(message);
    }
    newGame(randomNum());
});
