
 //Create a list that holds all of your cards

var faces = ['anchor', 'anchor', 'bicycle', 'bicycle', 'bolt', 'bolt', 'bomb', 'bomb', 'cube', 'cube', 'diamond', 'diamond',
'leaf', 'leaf', 'paper-plane-o', 'paper-plane-o'];
	opened = [],
	match = 0,
	moves = 0,
	$deck = $('.deck'),
	$scorePanel = $('#score-panel'),
	counter = document.querySelector(".moves"),
	$ratingStars = $scorePanel.find('i'),
	$restart = $scorePanel.find('.restart'),
	stars = document.querySelectorAll(".fa-star"),
  modal = document.getElementById("popup1"),
  closeicon = document.querySelector(".close"),
	delay = 800,
	gameCardsQTY = faces.length / 2;

// Shuffle function From http://stackoverflow.com/a/2450976
function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

// Begin Game
function initGame() {
  //shuffle card array list
  var cards = shuffle(faces);
  // remove exisiting classes from each card
  $deck.empty();
  match = 0;
  $ratingStars.removeClass('fa-star-o').addClass('fa-star');
	for (var i = 0; i < cards.length; i++) {
		$deck.append($('<li class="card"><i class="fa fa-' + cards[i] + '"></i></li>'))
	}
   // reset moves
   moves = 0;
   counter.innerHTML = moves;
   // reset rating
   for (var i= 0; i < stars.length; i++){
       stars[i].style.color = "#FFD700";
       stars[i].style.visibility = "visible";
   }
  //reset timer
   second = 0;
   minute = 0;
   hour = 0;
   var timer = document.querySelector(".timer");
   timer.innerHTML = "0 mins 0 secs";
   clearInterval(interval);

};
//Counts moves and decreases stars as number of moves increases
function countMoves(){
    moves++;
    counter.innerHTML = moves;
    //start timer on first click
    if(moves == 1){
        second = 0;
        minute = 0;
        hour = 0;
        initTimer();
    }
    // stars decrease based on moves
    if (moves > 8 && moves < 14){
        for( i= 0; i < 3; i++){
            if(i > 1){
                stars[i].style.visibility = "collapse";
            }
        }
    }
    else if (moves > 15){
        for( i= 0; i < 3; i++){
            if(i > 0){
                stars[i].style.visibility = "collapse";
            }
        }
    }
}
// game timer
var second = 0, minute = 0; hour = 0;
var timer = document.querySelector(".timer");
var interval;
function initTimer(){
    interval = setInterval(function(){
        timer.innerHTML = minute+"mins "+second+"secs";
        second++;
        if(second == 60){
            minute++;
            second=0;
        }
        if(minute == 60){
            hour++;
            minute = 0;
        }
    },1000);
}

// Card flip
$deck.on('click', '.card:not(".match, .open")', function() {
	if($('.show').length > 1) { return true; }

	var $this = $(this),
			card = $this.context.innerHTML;
  $this.addClass('open show');
	opened.push(card);

	// Compare with opened card
  if (opened.length > 1) {
    if (card === opened[0]) {
      $deck.find('.open').addClass('match animated infinite rubberBand');
      setTimeout(function() {
        $deck.find('.match').removeClass('open show animated infinite rubberBand');
      }, delay);
      match++;
    } else {
      $deck.find('.open').addClass('notmatch animated infinite wobble');
			setTimeout(function() {
				$deck.find('.open').removeClass('animated infinite wobble');
			}, delay / 1.5);
      setTimeout(function() {
        $deck.find('.open').removeClass('open show notmatch animated infinite wobble');
      }, delay);
    }
      if (gameCardsQTY===match){
         congratulations();

      }
    opened = [];

    countMoves();

  }

function closeModal(){
    closeicon.addEventListener("click", function(e){
        modal.classList.remove("show");
        initGame();
    });
}

// restarts game when user selects play Again
function playAgain(){
    modal.classList.remove("show");
    initGame();
}

	// End Game if matched all cards
	function congratulations(){
    if (gameCardsQTY===match){
        clearInterval(interval);
        finalTime = timer.innerHTML;

        // show congratulations modal
        modal.classList.add("show");

        // star rating variable
        var starRating = document.querySelector(".stars").innerHTML;

        //showing move, rating, time on modal
        document.getElementById("finalMove").innerHTML = moves;
        document.getElementById("starRating").innerHTML = starRating;
        document.getElementById("totalTime").innerHTML = finalTime;
        //add event listener for click on play-again and call playAgain function
        document.getElementById ("play-again").addEventListener ("click", playAgain, false);
        //closeicon on modal
        closeModal();
    };
}

});

initGame();
