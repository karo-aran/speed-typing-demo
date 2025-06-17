// declare and define variables that refer to HTML elements


// running time of the timer (during an iteration when the value changes)
// necessary for countdown functionality
let curr_time = document.querySelector(".time");

let seconds = 60;
let points = 0;

// variable that holds the letter typed
let typed;
// spans hold individual letters of the test word
let spans;
// keeps track of when the game is active (to prevent double starting the game)
let game_active = false;

// make your list of test words here
// you may change the existing words
let list = ["the","quick","brown","fox","jumps","over","the","lazy","dog"];

/*
 *
 * countdown()
 * 
 */







/*
 *
 * random_word()
 * 
 */





/*
 *
 * btn event listener
 * 
 */
// button must start countdown and produce random word
btn.addEventListener("click", function() {
    //prevents restarting mid-game
    if (game_active === true) {
        return;
    }
    //prevents button double click/ further clicks
    // btn.disabled = true; //unnecessary
    // status of if there is a game/round that is ongoing
    game_active = true;

    // uses/calls function that allow for countdown timer
    // uses/calls function for random word generation
    countdown();
    random_word();
});

/*
 *
 * typing(event)
 * 
 */







//enables keyboard input (default)
document.addEventListener("keydown", typing, false);