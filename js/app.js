// The MIT License (MIT)

// Copyright (c) 2015 Mike Myers

// Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

// The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
//THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
$(document).ready(function(){

    var randNum, guessNum;
    var guesses = 0;

    /*--- Display information modal box ---*/
    $(".what").click(function(){
        $(".overlay").fadeIn(1000);
    });
    /*--- Hide information modal box ---*/
    $("a.close").click(function(){
         $(".overlay").fadeOut(1000);
    });
    function logIt(message) {
        console.log(message);
    }
    function newGame(number) {
        logIt("In newGame function.");
        logIt("number is: " + number);
        // enable the Guess button, if it's disabled
        if ($('#guessButton').attr('disabled') === 'disabled') {
            $('#guessButton').removeAttr('disabled', '');
        }
        // reset feedback
        $('#feedback').text('Make your Guess!');
        // reset userGuess text field
        $('#userGuess').val('');
        // reset guessed numbers
        $('#guessList').empty();
        // reset guesses count
        guesses = 0;
        $('#count').text(guesses);
    }
    function randomNum() {
        randNum = Math.floor((Math.random() * 100) + 1);
        logIt("num is: " + randNum);
        return randNum;
    }
    function howClose() {
        // testing logic goes here.
        logIt("In howClose function.");
        logIt("randNum is: " + randNum);
        logIt("guessNum is: " + guessNum);
        var guessDiff = Math.abs(guessNum - randNum);   // find the difference
        logIt("guessDiff is: " + guessDiff);
        if (guessDiff > 100) {
            alert("Your number is too large. Please pick a number between 1 and 100, including 1 and 100.")
        } else if ((guessDiff <= 100) && (guessDiff > 50)) {
            logIt("Ice cold!");
            $('#feedback').text('Ice cold!');
        } else if ((guessDiff <= 50) && (guessDiff > 30)) {
            logIt("cold");
            $('#feedback').text('Cold');
        } else if ((guessDiff <= 30) && (guessDiff > 15)) {
            logIt("warm");
            $('#feedback').text('Warm');
        } else if ((guessDiff <= 15) && (guessDiff > 5)) {
            logIt("hot");
            $('#feedback').text('Hot!');
        } else if ((guessDiff <= 5) && (guessDiff >= 1)) {
            logIt("very hot");
            $('#feedback').text('Very hot!');
        } else if (guessDiff === 0) {
            logIt("Congratulations, you got it!");
            $('#feedback').text('Congratulations, you got it!');
            $('#guessButton').attr('disabled', ''); // disable the Guess button
            alert('Great job! Click the New Game button to start over.');
        }
    }
    $('#guessButton').click(function() {
        logIt("Guess button clicked.");
        guessNum = parseInt($('#userGuess').val(), 10);
        logIt("guessNum is: " + guessNum);
        howClose();
        guesses++;
        logIt("guesses is: " + guesses);
        // show number of guesses
        $('#count').text(guesses);
        // add guessed number to user guessList.
        $('#guessList').append('<li>' + guessNum + '</li>');
    });
    $('a.new').click(function() {
        logIt("New Game button clicked.")
        newGame(randomNum());
    });
    newGame(randomNum());
});
