// The MIT License (MIT)

// Copyright (c) 2015 Mike Myers

// Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

// The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
//THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
$(document).ready(function(){

	var randNum = 0 ;
	var guessNum = 0;
	var guesses = 0;
	var feedbackText = '';
	var guessCount = $('#count');
	var feedback = $('#feedback');
	var guessList = $('#guessList');
	var userGuess = $('#userGuess');
	var guessButton = $('#guessButton');

	/*--- Display information modal box ---*/
	$('.what').click(function(){
		$('.overlay').fadeIn(1000);
	});
	/*--- Hide information modal box ---*/
	$('a.close').click(function(){
		 $('.overlay').fadeOut(1000);
	});
	guessButton.click(function() {
		guessNum = parseInt(userGuess.val(), 10);
		howClose();
		guesses++;
		logIt('guesses is: ' + guesses);
		// show number of guesses
		guessCount.text(guesses);
		// add guessed number to user guessList.
		guessList.append('<li>' + guessNum + '</li>');
	});
	$('a.new').click(function() {
		newGame(randomNum());
	});
	function newGame(number) {
		// enable the Guess button, if it's disabled
		if (guessButton.attr('disabled') === 'disabled') {
			guessButton.removeAttr('disabled', '');
		}
		// reset feedback
		feedback.text('Make your Guess!');
		// reset userGuess text field
		userGuess.val('');
		// reset guessed numbers
		guessList.empty();
		// reset guesses count
		guesses = 0;
		guessCount.text(guesses);
	}
	function howClose() {
		// testing logic goes here.
		var guessDiff = Math.abs(guessNum - randNum);   // find the difference
		if (guessDiff > 100) {
			alert('Your number is too large. Please pick a number between 1 and 100, including 1 and 100.')
		} else if ((guessDiff <= 100) && (guessDiff > 50)) {
			feedbackText = 'Ice cold!';
		} else if ((guessDiff <= 50) && (guessDiff > 30)) {
			feedbackText = 'Cold';
		} else if ((guessDiff <= 30) && (guessDiff > 15)) {
			feedbackText = 'Warm';
		} else if ((guessDiff <= 15) && (guessDiff > 5)) {
			feedbackText = 'Hot!';
		} else if ((guessDiff <= 5) && (guessDiff >= 1)) {
			feedbackText = 'Very hot!';
		} else if (guessDiff === 0) {
			feedbackText = 'Congratulations, you got it!';
			guessButton.attr('disabled', ''); // disable the Guess button
			alert('Great job! Click the New Game button to start over.');
		}
		feedback.text(feedbackText);
	}
	function randomNum() {
		randNum = Math.floor((Math.random() * 100) + 1);
		return randNum;
	}
	function logIt(message) {
		console.log(message);
	}
	newGame(randomNum());
});
