let gamePlay = confirm('Do you want to play a game?'),
randomNum = 0,
range = 8,
guessNum = 0,
totalPrize = 0,
prize = 100,
rangeStep = 4,
prizeStep = 2,
prizeDown = 25,
attempts = 3;


while (gamePlay === true) {
	let counter = 3;

	if (gamePlay === false) {
		alert('You did not become a billionaire, but can.');
	} else {

		for (let i = 0; i < attempts; i++) {

			randomNum = Math.floor(Math.random() * range + 1);
			console.log(randomNum);
			guessNum = parseInt(prompt('Choose a roulette pocket number from 0 to ' +
				range + '\n Attempts left: ' + counter + '\n Total prize: ' + totalPrize +
				'\n Possible prize on current attempt: ' + prize, ''));
			counter -= 1;
			if (guessNum === randomNum) {
				totalPrize += prize;
				alert('Your winnings are ' + prize + ' $');
				break;
			} else {
				prize = prize - prizeDown;
			}
		}

		if (counter === 0) {
			alert('You lose. Thank you for your participation.');
			break;
		} else {
			let playAgain = confirm('Congratulation, you won!   Your prize is:' + totalPrize +
				' $. Do you want to continue?');

			if (playAgain === false) {
				alert('Thank you for your participation. Your prize is: ' + totalPrize + ' $');
				break;
			} else {
				range += rangeStep;
				prize *= prizeStep;
				continue;
			}
		}
	}
}