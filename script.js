console.log("test");
//name variable

let name = document.querySelector("#myinput")
name.addEventListener("click", event =>{
    console.log("test name ");
    
})

// reset game
let restartButton = document.querySelector(".restartButton")
restartButton.addEventListener("click", event =>{
    console.log("test reset button");
})
  
  

// score variable
let score = 0;
// function scoreBoard (score){
//     document.querySelector(".score-board")
        
//     }
// }



// array for all squares
let card=  document.querySelectorAll(".game-card")
// let cards = [card.value]
console.log(card);
 card.forEach(function(cards){
     cards.addEventListener("click", event=>{
        console.log(cards);
     console.log(event.target);
 });
});


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


//  for (let i = 0; i < 16; i++) {
//     card[i].addEventListener("click", function(event) {
//       event.preventDefault();
//       const url =
//       "https://api.thedogapi.com/v1/images/search?limit=16&order=desc"
//     fetch(`${url}`, {
//       headers: {
//         "x-api-key": "b2e8c411-2fe2-4480-af24-0b66899e0b5f",
//       },
//     })
//       .then((res) => res.json())
//       .then((dog) => {
//         console.log("Dog Img: ", dog);
//         cards.push(dog);
//         console.log(dog);
//         document.querySelector(".randomDogImage").src = dog[0].url       
//       })
//       .catch((err) => console.log(err, "error here"));
//     });
//   }



