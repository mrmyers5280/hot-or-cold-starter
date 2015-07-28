
$(document).ready(function(){

	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);
  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});

	function randomNum() {
		num = Math.round((Math.random() * 100) + 1);
		logIt("num is: " + num);
		return num;
	}
	function logIt(message) {
		console.log(message);
	}
	randomNum();
});
