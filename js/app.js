
$(document).ready(function(){
	
	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});
	var secretNum = newGame();
	var lastGuess;
	var firstGuess = 0;
	var feedback = "";

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});

  	$(".new").click(function(){
    	newGame();
    	firstGuess = 0;
    	$('#feedback').text("Make your Guess!");
		$("#guessList li").remove();
    	$('#count').text("0");
  	});

	$('#guessButton').click(function(){

	  	var guess = parseInt($('#userGuess').val());
	  	if(firstGuess = 0){
	  		feedback = "";
	  	}
	  	else if((Math.abs(guess - secretNum)) > (Math.abs(lastGuess - secretNum))) {
	  		feedback = "- getting colder";
	  	}
	  	else if ((Math.abs(guess - secretNum)) < (Math.abs(lastGuess - secretNum))) {
	  		feedback = "- getting warmer";
	  	}
	  	else{
	  		feedback = "- not any hotter or colder";
	  	}
		console.log("feedback is:" + feedback);

	  	$('#count').text(parseInt($('#count').text())+1);

	  	if(Math.abs(guess - secretNum) >= 50) {
			$('#feedback').text("ice cold" + feedback);
	  	}
	  	else if(Math.abs(guess - secretNum) > 30) {
	  		$('#feedback').text("cold.");
	  	}
	  	else if(Math.abs(guess - secretNum) > 20) {
	  		$('#feedback').text("warm" + feedback);
	  	}
	  	else if(Math.abs(guess - secretNum) > 10) {
	  		$('#feedback').text("hot" + feedback);
	  	}
	  	else if(Math.abs(guess - secretNum) >= 1) {
	  		$('#feedback').text("very hot" + feedback);
	  	}
	  	else {
	  		$('#feedback').text("You win!");
	  		return false;
	  	}
	  	$('#guessList').append('<li>'+guess+'</li>');
	  	lastGuess = guess;
	  	firstGuess = 1;
	  	return false;
	});

});


function newGame() {
	secretNum = Math.floor((Math.random() * 100) + 1);
	return secretNum;
}
