// tu wstawcie kod pobierania wyboru od komputera
var computerChoice = Math.floor(Math.random()* 5);

// tu wstaw tablicę opcji
var choiceArray = ['Rock', 'Spock', 'Paper', 'Lizard', 'Scissors'];
var computerChoiceName = choiceArray[computerChoice];

// wyswietlenie wybranych opcji 
var targetSelection = function (target, inset) {
	var foo = document.getElementById(target);
	foo.innerText = inset;
}
// tu wstaw mechanizm gry
var game = function(userChoice, computerChoice) {
	var userChoiceNumber;

// zamieniam wybrana opcje na 
	var arrayCount = choiceArray.length;
	for (var i = 0; i < arrayCount; i++) {
		if (choiceArray[i] === userChoice) {
			userChoiceNumber = i;
			break;
		} 
	}

	if (userChoiceNumber === computerChoice) {
		targetSelection('result', 'Remis');
	} else {
		var compareResult = ((userChoiceNumber - computerChoice) + 5)%5;
		if (compareResult === 2 || compareResult === 1) {
			targetSelection('result', 'Wygrywasz TY');
		} else {
			targetSelection('result', 'Wygrywa Komputer');
		}
	}
}

// tu pobieramy od użytkownika jego wybór
  var buttons = document.getElementsByTagName('button');
  
  var buttonsCount = buttons.length;
  var userChoice;
  for (var i = 0; i < buttonsCount; i++) {
    
    buttons[i].onclick = function(e) {
        userChoice = this.innerHTML;
		
		// wyswietlenie wybranych opcji 
        targetSelection('user', userChoice);
        targetSelection('computer', computerChoiceName);

        game(userChoice, computerChoice)
    };
  }

  

// pamiętaj o wypisaniu wyboru użytkownika i komputera oraz wyniku gry na stronie we właściwych miejscach

