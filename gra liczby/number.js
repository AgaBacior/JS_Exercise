// Komputer losuje liczbe
var drawComputer = function() {
	return Math.floor((Math.random()*100) + 1);
};
var numberComputer = drawComputer();
console.log(numberComputer);

// Przypisujemy id=text do var textResult
var textResult = document.getElementById('text');

// Przypisujemy formularz do var form
var form = document.querySelector('form');

// Przypisujemy imput do var inputForm
var inputForm = form.querySelector('input');

// Liczymy ilosc prob
var counterEvent = 1; 

// Funkcja czyszczenie inputu
function clearThis(target){
	target.value = "";
}	

// Funkcja Porownanie naszej liczby z losowaniem komputera
var testFunction = function(numberC, numberU){

	// Liczymy ilosc prob
	var textCounter = '<p>Proba numer ' + counterEvent + '</p>';
	
	numberU = parseInt(numberU);
	
	if (isNaN(numberU)) {
		textResult.innerHTML = textCounter + '<p>Wpisz poprawnie liczbe</p>';
		
		counterEvent++;
		clearThis(inputForm);

	} else {
		
		if (numberU === numberC) {
		textResult.innerHTML = textCounter + '<p>Brawo!</p>';
		
		// ukrywamy formularz
		var childForm1 = form.getElementsByTagName('p');
		childForm1[1].classList.add('hidden');

		} else {

			if(numberU < numberC) {
				text = '<p>Twoja liczba, czyli ' + numberU +', jest za mala</p>';
			} else {
				text = '<p>Twoja liczba, czyli ' + numberU +', jest za duza</p>';
			}
			
			textResult.innerHTML = textCounter + text;
			
			counterEvent++;
			clearThis(inputForm);
		}
	}
}

// Event submit: jesli nastapilo wyslanie formularza 
form.addEventListener('submit', function(e) {
	var numberUser = form.numberUser.value; 
	// Zapobiegamy domyślnej akcji przeglądarki, czyli przeładowania strony
	e.preventDefault(); 
	
	testFunction(numberComputer, numberUser);
});
