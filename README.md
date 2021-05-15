#
# Flash-cards

The Flash Cards game is a basic matching game to test the player's memory by matching 16 images. <br> In order to win the game, the player needs to match each pair.
<br><br>Example of Starting the game:
<br><br>
          ![This is a alt text.](https://github.com/ASmith1983/Flash-cards/blob/main/Images%26gifs/FlashCards-%20img:gif/FlashCards-startGame.gif "Flashcards-startGame.")

# 
## Process and Thought logic

User Stories:
* Creating a user story help me focus on who was my intended audience and what my basic goals were for the project.
  * Game was created for a single player with specific MVP goals:
    <br><br>
          ![This is a alt text.](https://github.com/ASmith1983/Flash-cards/blob/main/Images%26gifs/FlashCards-%20img:gif/Flash%20Cards-%20User%20stories.jpg "Flashcards-userStories.")
     

Wire Frame: 
* First step was creating wire frame.
  * The wireframe process started with creating the first real concrete visual process for the project and how I wanted page layout to appear.
    Within the drawing you can see the various stages of user interaction within the game. Taking this visual guide I was able to start creating
    a foundation using HTML and CSS. 
<br><br>Image of Wire Frame:
<br><br>
          ![This is a alt text.](https://github.com/ASmith1983/Flash-cards/blob/main/Images%26gifs/FlashCards-%20img:gif/IMG_9124.JPG "Flashcards-wire frame.")
 
#
### Technologies used to creat Project
#

1. HTML
   * Semantic HTML
1. CSS
   * CSS styling and layout
   * CSS Grid
1. JavaScript
   * JavaScript programming
   * Working with the DOM
   * JavaScript events



#
## Creating the Layout and Design:

* The structure of the gameboard was created using HTML And CSS, Using this method allowed me to create a grid to display all the images on the screen.

* I created a number of divs that contained an image in each div. The divs where placed inside a game-board div so that I may target both individual cards
  as well as the whole game board itself.

* Once the basic structure was layout in HTMl, I was able to use CSS to style and manipulate my how the display looked using GRID.

* From there I used JavaScript to access each card and the game board. 

* Creating a empty array to push my selected card in was critical to development. I was able to do this using the method forEach on each card before pushing
 it to the empty array. Next I was then able to take that array and using the Fisher-Yates method I was able to shuffle array/cards.

* From there I wanted to creat a set of check condtions for the game to work:
  * Click on a black square to reveal the card.
  * Click on a second black square to reveal the card.
  * If the two cards match, the cards stay revealed.
  * If there is no match, the cards are hidden and you can click another pair.
  * If a coorect pair is identified then a point should be added to the players score. 
<br><br>
<br><br>
          ![This is a alt text.](https://github.com/ASmith1983/Flash-cards/blob/main/Images%26gifs/FlashCards-%20img:gif/FlashCards-%20finding_a_match.gif "Flashcards-finding a match.")
<br><br>
<br><br>
   * When you have correctly matched all 8 pairs of cards, the game ends and an alert window opens congratulating you.
   * Finally I used CSS and some animation to style the background and cards themselves. 
   * Once complete I posted my project on Github.
   * Check out the finished project @ https://asmith1983.github.io/Flash-cards/<br><br>
<br><br>
          ![This is a alt text.](https://github.com/ASmith1983/Flash-cards/blob/main/Images%26gifs/FlashCards-%20img:gif/FlashCards-%20endGame.gif "Flashcards-Game over.")
<br><br>
<br><br>
 
#
### Unsolved problems
#

1. Flipping all the cards to show current value prior to start.
1. Adding a api to select images.
1. Fixing small glitches suchs as selecting same card once card has been selected.
<br><br>
#
