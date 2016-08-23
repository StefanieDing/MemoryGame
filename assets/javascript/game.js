var pickFirstNumber = true;
var firstpick;
var secondPick;
var wins = 0;
var losses = 0;
var guesses = 5;
$('#guesses-remaining').html(guesses);
$('.card').on('click', function(event) {
	alert("clicked");
	if (pickFirstNumber == true) {
		fistPick = this.value;
		pickFirstNumber = false;
	} else if (pickFirstNumber == false) {
		secondPick = this.value;
		isMatched();
	}
});


$('#new-game').on('click', function(event) {
	newGame();
});

function isMatched() {
	if (firstPick == secondPick) {
		$('#msg-box').html("You Win!");
		wins++;
		$('#wins').html(wins);
	} else {
		guesses--;
		$('#guesses-remaining').html(guesses);
		if (guesses == 0) {
			$('#msg-box').html("You lose!");
			losses++;
			$('#losses').html(losses);
		}
	}
	}
	firstPick = "";
	secondPick = "";
}


