// declare and define variables that refer to HTML elements
let btn = document.querySelector('.startBtn');
let time = document.querySelector('.time');
let score = document.querySelector('.score');
let test = document.querySelector('.test');

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
let list = ["strawberry","banana","purple","pink","elegant","amor","cutie","sleepy","live"];

/*
 *
 * countdown()
 * 
 */
    function countdown() {
        timer = setInterval( function() {
            seconds -= 1;
            curr_time.innerHTML = seconds;

            // timer ends
            if (seconds <=0) {
                //ending alert
                alert("Game Over! Your score was " + points);

                // rests ALL HTML elements
                score.innerHTML = "0";
                test.innerHTML = "";
                time.innerHTML = "60";
                
                game_active = false;

                clearInterval(timer);
                seconds = 60;
                points = 0;
            }

        }, 1000); // runs every one second
    }






/*
 *
 * random_word()
 * 
 */
function random_word() {
    //generates a random number
    let random = Math.floor(Math.random() * list.length);
    //splits random words into it's characters
    let word = list[random].split("");

    //clear any precious words/character
    test.innerHTML = "";

    //creates the word letter by letter
    for (let i = 0; i < word.length; i++) {
        //create an inline span container for the letter
        let span = document.createElement("span");
        //creates a class that applies to all of the span that make up the word
        span.classList.add("span");

        // changes HTML of the span to show each letter
        span.innerHTML = word[i];
        test.appendChild(span);
    }

    //defines a variable
    spans = document.querySelectorAll(".span");

}




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