console.log("test");
//name variable/array
let name = [];
// score variable
let score = 0;
// array for cards to be shuffled
let toBeShuffledCards = [];
// variable for cards selected
let cardSelected =[]


// set player enter name in prompt 
let enterName = document.querySelector("#myinput");
    enterName.addEventListener("click", event =>{
    console.log("test name ");
    let userName = prompt("Please enter your name here", " ");
    if (userName != null){
        document.querySelector("#myinput").innerText = `${userName}`;
    }else if(userName == null){
        document.querySelector("#myinput").innerText = "Enter name here";
    }
    
    console.log(userName);
     
    })


// reset game
let restartButton = document.querySelector("#restartButton")
    restartButton.addEventListener("click" , event =>{
    console.log("test reset button");
    })


// select all the cards
let card=  document.querySelectorAll(".game-card")
// push all the cards to shuffledCards array
toBeShuffledCards.push(card);
console.log(toBeShuffledCards);
console.log(card);

 card.forEach(function(cards){
     cards.addEventListener("click", event=>{
        console.log(cards);
     console.log(event.target.id);
     cardSelected.push(event.target.id);
     console.log(cardSelected);
     console.log(cardSelected[0].vaule);
    //  creat condition to check it cards are a match
     if(cardSelected[0] == cardSelected[1]){
         console.log("looped worked");
        // if match add a point to score
        score += 1;
        console.log(score);
        // leave match visible

        // clear cardSelected Array?
        cardSelected = [];
        // if card is not the right match
     }else if ((cardSelected.length == 2) && (cardSelected[0] !== cardSelected[1])){
         console.log("try again");
        //hide value of both cards selected
        // maybe pop cards out of cardSelected
        // cardSelected.pop(event.target.id[0] + event.target.id[1]);
        cardSelected = [];

     }
    //  link current score and display it in score button
     document.querySelector("#scoreButton").innerText = `Score: ${score}`

 });
});


// Starting the game with a function
function startGame() {
    // we will need to shuffle the cards
    let shuffledCards = shuffle(toBeShuffled);
    // we need to hide the cards value
    for( let i = 0; i < shuffledCards.length; i++){
        shuffledCards[i].style.display= "none";
    }
    // shuffledCards = document.querySelectorAll(".game-card").style.display = 'none';
    console.log(shuffledCards);

}

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






