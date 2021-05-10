//name variable/array
let name = [];
// score variable
let score = 0;
// array for cards to be shuffled
let toBeShuffledCards = [];
// variable for cards selected
let cardSelected = [];

// set player enter name in button/prompt
let enterName = document.querySelector("#myinput");
// add eventListener for name button/prompt
enterName.addEventListener("click", (event) => {
  console.log("test name ");
  // set up username variable and prompt
  let userName = prompt("Please enter your name here", " ");
  // conditions for entering name
  if (userName != null) {
    document.querySelector("#myinput").innerText = `${userName}`;
    document.querySelector(".game-status").innerText = "Try to find all the matches. Click any square below to begin";

    // startGame();
  } else if (userName == null) {
    document.querySelector("#myinput").innerText = "Enter name here";
//     setTimeout(function() {
//         modal.style.display = "block";
//   }, 5000);};
//   console.log(userName);
//   var modal = document.getElementById("myModal");
//   window.onclick = function(event) {
//     if (event.target == modal) {
//       modal.style.display = "none";
//     }
  };

  startGame();
});

// restart game
let restartButton = document.querySelector("#restartButton");
    restartButton.addEventListener("click", (event) => {
    console.log("test reset button");
// if button is clicked score should go back to 0
    score = 0;
//  link current score and display it in score button
    document.querySelector("#scoreButton").innerText = `Score: ${score}`;
// if button is clicked name of player should null
    document.querySelector("#myinput").innerText = "Enter name here";
// startGame() function should be called
    startGame();
});

// Starting the game with a function
function startGame() {
  // clear toBeShuffledCards array to empty
  toBeShuffledCards = [];
  // if button is clicked score should go back to 0
  score = 0;
  //  link current score and display it in score button
  document.querySelector("#scoreButton").innerText = `Score: ${score}`;



  // select all the cards
  let cards = document.querySelectorAll(".game-card img");
  // push all the each cards to shuffledCards array into toBeShuffled array
  console.log(cards);
  // change inner text of div to remove "click to display" and show the cards with image only
  document.querySelectorAll(".game-card").innerText = "none";
  for (let i = 0; i < cards.length; i++) {
    toBeShuffledCards.push(cards[i]);
  }

  // console.log(toBeShuffledCards);
  // console.log(card);
  cards.forEach(function (card) {
    card.addEventListener("click", (event) => {
      console.log(card);
      console.log(event.target.id);
    });
  });

// 2nd addeventlistener for hidden values
let hiddenCards = document.querySelectorAll(".game-card");
hiddenCards.forEach(function (hcard) {
    hcard.addEventListener("click", (event) => {
    //   create time out function for when card is clicked to see vaule for 1 second before flipping back.
      let delayMilli = 1500;
      setTimeout(function(){
        event.target.childNodes[0].classList.toggle("hide");

      }, delayMilli);

      event.target.childNodes[0].classList.toggle("hide");

      console.log(`this is: ${hcard}`);
      console.log(event.target.childNodes[0].id);
      if (cardSelected !== [0]) {
        cardSelected.push(event.target.childNodes[0].id);
      }
      console.log(cardSelected);
      //  creat condition to check it cards are a match
      if (cardSelected[0] == cardSelected[1]) {
        console.log("looped worked");
        // if match add a point to score
        score += 1;
        // update score button
        document.querySelector("#scoreButton").innerText = `Score: ${score}`;
        // updates game-status tag
        
        // this works for one card to show its value after clicked
            event.target.childNodes[0].classList.toggle("hide");
                // for(let i =0; i< cardSelected.length; i++){
                //     event.target.childNodes[0].classList.toggle("hide");
                //     console.log(event.target);
                //     // event.target.childNodes[0[1]].classList.toggle("hide");
                // };
        console.log(cardSelected[0]);
        console.log(score);

        document.querySelector(".game-status").innerText = "Nice Job you found a match! Click any square below to continue";
        
        // end game if score equals 8
        if (score == 8) {
            document.querySelector(".game-status").innerText = "You found all the matches!";

            alert("Congratulations you found all the matches!");
            startGame();
        };
        // clear cardSelected Array?
        cardSelected = [];
        // if card is not the right match
    } else if (cardSelected.length == 2 && cardSelected[0] !== cardSelected[1]) {         
            console.log("try again");
            document.querySelector(".game-status").innerText = "Sorry that wasnt a match try again!";

        //hide value of both cards selected
            cardSelected = [];
            //need compare that its not same square/location in array?
        } else {
            //cardSelected[0].classList.toggle("hide");
            // cardSelected[1].classList.toggle("hide");
            // event.target.childNodes[0].classList.toggle("hide");
            // event.target.childNodes[1].classList.toggle("hide");
            
      }
  // we will need to shuffle the cards
  // console.log(toBeShuffledCards);
    });
});  



  // shuffle cards.
  console.log(toBeShuffledCards);
        //     let shuffledCards = [];
        //     //   let shuffledCards = toBeShuffledCards[randomCard];
        // function shuffle(array){    
        //     for (let i = 0; i < toBeShuffledCards.length; i++) {
        //         let randomCard = Math.floor(Math.random() * toBeShuffledCards.length);
        //         console.log(randomCard);
        //         // if(randomCard != randomCard)
        //         shuffledCards.push(toBeShuffledCards[randomCard]);
        //     }}
        //     shuffle(toBeShuffledCards);
        //     // console.log(`this is: ${randomCard}`);
        //     console.log(shuffledCards);

        //     // we need to hide the cards value and flip all cards at start
        //     for (let i = 0; i < shuffledCards.length; i++) {
        //         shuffledCards[i].classList.add("hide");
        //     }


      for(let i = 0;i< toBeShuffledCards.length; i++){
          toBeShuffledCards[i].classList.add("hide");
      }      
  // console.log(toBeShuffledCards);
  // end game
  if (score == 8) {
    prompt("Congratulations you found all the matches!");
    startGame();
  }
}

// start game
//  window.onload = startGame();








// DOING TOO MUCH!
// // select all the cards
//  let card = document.querySelectorAll(".randomDog").forEach(item=>{
//      window.addEventListener('load', event =>{
//         const url =
//         "https://api.thedogapi.com/v1/images/search?limit=16&order=desc"
//       fetch(`${url}`, {
//         headers: {
//           "x-api-key": "b2e8c411-2fe2-4480-af24-0b66899e0b5f",
//         },
//       })
//         .then((res) => res.json())
//         .then((dog) => {
//           console.log("Dog Img: ", dog);
//           cards.push(dog);
//           console.log(cards);
//         //   document.querySelector(".randomDogImage").src = dog[0].url
//         })
//         .catch((err) => console.log(err, "error here"));
//      })
//  });
//  console.log(card);
