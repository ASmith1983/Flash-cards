//name variable/array
let name = [];
// score variable
let score = 0;
// access sscore button
let scoreDisplay = document.querySelector("#scoreButton");
// array for cards to be shuffled
let toBeShuffledCards = [];
// variable for cards selected
let cardSelected = [];
// variable for gameStatus
let gameStatus = document.querySelector(".game-status");
// set player enter name in button/prompt
let enterName = document.querySelector("#myinput");
// add eventListener for name button/prompt
enterName.addEventListener("click", (event) => {
//   console.log("test name ");
// set up username variable and prompt
let userName = prompt("Please enter your name here", " ");
// conditions for entering name
    if (userName != null) {
        enterName.innerText = `${userName}`;
        gameStatus.innerText = "Try to find all the matches. Click any square below to begin";

    } else if (userName == null) {
        enterName.innerText = "Enter name here";
    };
        startGame();
});

// restart game handler
let restartButton = document.querySelector("#restartButton");
    restartButton.addEventListener("click", (event) => {
    // console.log("test reset button");
// if button is clicked score should go back to 0
    score = 0;
//  link current score and display it in score button
    document.querySelector("#scoreButton").innerText = `Score: ${score}`;
// if button is clicked name of player should null
    document.querySelector("#myinput").innerText = "Enter name here";
// clear out message board
    gameStatus.innerText = "Try to find all the matches. Click any square below to begin";
// startGame() function should be called and clear arrays
    toBeShuffledCards = [];
    cardSelected = [];
    startGame();
});

// Start the game function
// show cards for 1.5 seconds befoer game starts
function startGame() {
// clear toBeShuffledCards array to empty
    toBeShuffledCards = [];
// if button is clicked score should go back to 0
    score = 0;
//  link current score and display it in score button
    scoreDisplay.innerText = `Score: ${score}`;
// select all the cards
    let cards = document.querySelectorAll(".game-card img");
// push all the each cards to shuffledCards array into toBeShuffled array
    // console.log(cards);
    for (let i = 0; i < cards.length; i++) {
        toBeShuffledCards.push(cards[i]);
    }
    
// addeventlistener for hidden values
    let hiddenCards = document.querySelectorAll(".game-card");
        hiddenCards.forEach(function (hcard) {
        hcard.addEventListener("click", (event) => {
//   create time out function for when card is clicked to see vaule for 1 second before flipping back
            // console.log(event.target);
        let delayMilli = 1500;
        setTimeout(function(){
            event.target.firstChild.classList.toggle("hide");
        }, delayMilli);
// then hidden the value again after first click
        event.target.firstChild.classList.toggle("hide");
// push cardsselected into empty array
        if (cardSelected !== [0]) {
            cardSelected.push(event.target);
        }
        // console.log(cardSelected[0].firstChild.dataset);
    //   if(cardSelected[1]){
//  creat condition to check it cards are a match
        if (cardSelected[0].firstChild.dataset.dog == cardSelected[1].firstChild.dataset.dog && cardSelected[0].firstChild.id == cardSelected[1].firstChild.id) {
        // console.log("looped worked");
// if match add a point to score
        score += 1;
// update score button
        scoreDisplay.innerText = `Score: ${score}`;
// this shows two cards value(img) after condition is true
        cardSelected[0].firstChild.classList.toggle("hide");
        cardSelected[1].firstChild.classList.toggle("hide");
// update game status for results 
        gameStatus.innerText = "Nice Job you found a match! Click any square below to continue";
// clear cardSelected Array
        cardSelected = [];
// end game if score equals 8
        if (score == 2) {
            gameStatus.innerText = "You found all the matches!";
            let delayMilli2 = 5000;
            setTimeout(() =>{
// alert("Congratulations you found all the matches!");
                doAlert();
                cardSelected = [];
                location.reload();
            }, delayMilli2);
        };
// if card is not the right match
        } else if (cardSelected.length == 2 && cardSelected[0].firstChild.dataset.dog !== cardSelected[1].firstChild.dataset.dog) {         
            // console.log("try again");
            gameStatus.innerText = "Sorry that wasnt a match try again!";
//hide value of both cards selected
            cardSelected = [];
//need compare that its not same square/location in array?
        } 
        });
    });  
// function for to call congratulatory alert 
    let doAlert= () =>{
        alert("Congratulations found all the matches!"); 
    };
// shuffle cards....
// Fisher-Yates method to shuffle cards:=============
    let arrayShuffle = function(arr){
        let newPos,
        temp;
            for(let i = arr.length -1; i > 0; i--){
                newPos = Math.floor(Math.random() * (i +1));
                temp = arr[i];
                arr[i] = arr[newPos];
                arr[newPos] = temp;
            }
                return arr;
    };
// Pass cards to be shuffled through shuffle function 
    let shuffledCards = arrayShuffle(toBeShuffledCards);
            // console.log(shuffledCards);
// for each card hidden we need to access update innerHTML
        hiddenCards.forEach((cardTohide,i) => {
                // console.log(c);
                // console.dir(shuffledCards[i]);
            let tempCard = `<img src=${shuffledCards[i].src} id=${shuffledCards[i].id} data-dog=${shuffledCards[i].dataset.dog} class="hide">`
                cardTohide.innerHTML = tempCard
        })
};
// start game on refresh/window loading
//  window.onload = startGame();



