#What colour is the text?


## A game to keep your mind sharp.

[Play](https://what-colour.herokuapp.com/)

###Introduction

_"The game is much harder than it seems, in fact, it takes the average person 5 times to get 100%."_

A single page JavaScript game application to keep your mind sharp. 

An individual four-day project that tests the brain using colours and distractions to force you to think hard in a limited time period before you give your answer.

###Aims of the game
  You need to select the **colour** of the word, not the text of the word itself. 

  There are 4 levels each with 10 rounds and a final screen to display your score.
  
  Level 1 - 3 seconds

  Level 2 - 2.8 seconds

  Level 3 - 2.6 seconds + disctraction

  Level 4 - 2.5 seconds + background color change + distraction

###Functionality: 

A four level brain test game. On click the user is shown two buttons that each contain a colour. The user has to click the  **colour**  of the text not the text. Each level displays the round for between two and a half – three seconds. The user's score is displayed after ten rounds and logs if the user is correct, incorrect or not fast enough.
Introducing added distraction to level three and an additional background colour in level four.

###Technologies used: 

A single page _JavaScript_ application using _jQuery_ methods to hide and show HTML elements depending on the users input. The library also allows the execution of a new round after a set interval depending on the level, the three HTML elements per round are created using a random generator function. _Animate CSS_ adds styling and distractions to the game in level 3 and a counter loop keeps score and  limits the levels to ten rounds.


