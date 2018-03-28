/*
 * Create a list that holds all of your cards
 */
var cardList = [
'fa fa-diamond',
'fa fa-paper-plane-o',
'fa fa-anchor',
'fa fa-bolt',
'fa fa fa-cube',
'fa fa-anchor',
'fa fa-leaf',
'fa fa-bicycle',
'fa fa-diamond',
'fa fa-bomb',
'fa fa-leaf',
'fa fa-bomb',
'fa fa-bolt',
'fa fa-bicycle',
'fa fa-paper-plane-o',
'fa fa-cube'
];

var cardsymbol = document.querySelectorAll(".card");

//function to create HTML listing of cards
function cardHTML(cardList){
  var listHTML = '';
  for(var i = cardList.length - 1; i >=0; i--){
    listHTML += '<li class="card">' + '<i class="'+ cardList[i] + '"></i>'+'</li>';
}
  return listHTML;
}



//console.log(cardList.length);
//console.log(cardHTML(cardList));

//adding the card listing to the 'deck' html class
$('.deck').html(cardHTML(cardList));


/*
 * Display the cards on the page
 *   - shuffle the list of cards using the provided "shuffle" method below
 *   - loop through each card and create its HTML
 *   - add each card's HTML to the page
 */

//function restarts game


// Shuffle function from http://stackoverflow.com/a/2450976
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}
function begingame() {
	var openCards=[];
	shuffle(cardList);

	cardsymbol.removeClass();
	cardSymbol.each(function(index) {
		$(this).addClass(cardList[index]);
		index++
});
function flipCard() {
	 card.click(function() {
	 $(this).addClass('open show');
	}

}


/*
 * set up the event listener for a card. If a card is clicked:
 *  - display the card's symbol (put this functionality in another function that you call from this one)
 *  - add the card to a *list* of "open" cards (put this functionality in another function that you call from this one)
 *  - if the list already has another card, check to see if the two cards match
 *    + if the cards do match, lock the cards in the open position (put this functionality in another function that you call from this one)
 *    + if the cards do not match, remove the cards from the list and hide the card's symbol (put this functionality in another function that you call from this one)
 *    + increment the move counter and display it on the page (put this functionality in another function that you call from this one)
 *    + if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one)
 */
