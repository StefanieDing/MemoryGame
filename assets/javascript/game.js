var pickFirstNumber = true;
var firstPick;
var secondPick;
var wins = 0;
var losses = 0;
var guesses = 5;


$('.card').on('click', function(event) {
	// alert("clicked");
	if (pickFirstNumber == true) {
		firstPick = $(this).attr('data-value');
		console.log("firstPick is " + firstPick);
		$('#msg-box').html("You selected " + firstPick);
		pickFirstNumber = false;
	} else if (pickFirstNumber == false) {
		secondPick = $(this).attr('data-value');
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
	} else {
		guesses--;
		if (guesses == 0) {
			$('#msg-box').html("You lose!");
			losses++;
		}
	}
	firstPick = "";
	secondPick = "";
}



