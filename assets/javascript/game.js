var pickFirstNumber = true;
var firstPick;
var secondPick;
var wins = 0;
var losses = 0;
var guesses = 5;
var totalCards = 20;
var cardValues = [];

function shuffle(array) {
	var currentIndex = array.length, temporaryValue, randomIndex;

  	// While there remain elements to shuffle...
  	while (0 !== currentIndex) {

	    // Pick a remaining element...
	    randomIndex = Math.floor(Math.random() * currentIndex);
	    currentIndex -= 1;

	    // And swap it with the current element.
	    temporaryValue = array[currentIndex];
	    array[currentIndex] = array[randomIndex];
	    array[randomIndex] = temporaryValue;
	}

  	return array;
}

for (i=0; i < (totalCards/2) ; i++) {
	cardValues.push(i);
	cardValues.push(i);
}

console.log(cardValues);
shuffle(cardValues);
console.log(cardValues);

for (i=0; i < cardValues.length; i++) {
	$('#card-field').append('<div class="card panel-body col-xs-3 text-center alert alert-danger" data-value="' + cardValues[i] + '">' + cardValues[i] + '</div>');
}
	
$('#guesses-remaining').html(guesses);

$('.card').on('click', function(event) {
	// alert("clicked");
	if (pickFirstNumber == true) {
		firstPick = $(this).attr('data-value');
		console.log("firstPick is " + firstPick);
		$('#msg-box').html("You selected " + firstPick);
		pickFirstNumber = false;
	} else if (pickFirstNumber == false) {
		secondPick = $(this).attr('data-value');
		$('#msg-box').html("You selected " + secondPick);
		isMatched();
		setTimeout(function(){
			$('#msg-box').html("");
		},2000); 
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
	firstPick = "";
	secondPick = "";
}



