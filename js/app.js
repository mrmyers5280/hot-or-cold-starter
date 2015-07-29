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
        guessNum = parseInt($('#userGuess').val(), 10);
        logIt("guessNum is: " + guessNum);
        // howClose(randNum, guessNum);
        // testing logic goes here.
        var guessDiff = Math.abs(guessNum - randNum);   // find the difference
        logIt("guessDiff is: " + guessDiff);
        if (guessDiff > 100) {
            alert("Your number is too large. Please pick a number between 1 and 100, including 1 and 100.")
        } else if ((guessDiff <= 100) && (guessDiff > 50)) {
            logIt("ice cold");
        } else if ((guessDiff <= 50) && (guessDiff > 30)) {
            logIt("cold");
        } else if ((guessDiff <= 30) && (guessDiff > 20)) {
            logIt("warm");
        } else if ((guessDiff <= 20) && (guessDiff > 10)) {
            logIt("hot");
        } else if ((guessDiff <= 10) && (guessDiff >= 1)) {
            logIt("very hot");
        } else if (guessDiff === 0) {
            logIt("Congratulations, you got it!");
        }

        // add number to user guessList.
    });
    function logIt(message) {
        console.log(message);
    }
    newGame(randomNum());
});
