$(start); 

var roundCounter  = 0;
var playerCounter = 0;
var gameInterval;
var colorAndWordColors = [
  "red",
  "green",
  "blue",
  "pink",
  "purple",
  "yellow",
  "orange",
  "black",
  "turquoise",
  "brown"
];
var backgroundColors = [
  "snow",
  "oldlace",
  "lightsalmon",
  "lime",
  "palevioletred",
  "darkgrey",
  "firebrick",
  "seagreen", 
  "lightgreen",
  "papayawhip"
]
     
function start(){
  hideEverything();
  setupEvents();
}

function hideEverything(){
  return $.each([
    "#game", 
    "#score", 
    "#firstTitle",
    "#secondTitle",
    "#thirdTitle",
    "#fourthTitle",
    "#levelSelector"
  ], function(element, value){
    $(value).hide();
  });
}

function setupEvents(){
  var $play         = $("#playAgain");
  var $start        = $("#start");
  var $buttons      = $(".button");
  var $levelButtons = $("#levelSelector input");

  $start.on("click", runGame);
  $levelButtons.on("click", setLevel);
  $buttons.on("click", keepScore);
  $play.on("click", playAgain);
}


function playAgain(){
  var $levelSelector = $("#levelSelector");

  $(this).hide();
  hideEverything();
  $levelSelector.show();
}

function runGame(){
  var $welcome       = $("#welcome");
  var $levelSelector = $("#levelSelector");

  $(this).hide();
  $welcome.fadeOut("500", function(){
    $levelSelector.show();
  });
}

function setLevel(){
  var $levelSelector = $("#levelSelector");
  var $firstTitle    = $("#firstTitle");
  var $secondTitle   = $("#secondTitle");
  var $thirdTitle    = $("#thirdTitle");
  var $fourthTitle   = $("#fourthTitle");
  var $game          = $("#game");

  $levelSelector.hide();

  switch (this.id) {
    case "levelOne":
      $firstTitle.show();
      gameInterval = setInterval(function(){
        createRound(1);
      }, 3000);
      break;
    case "levelTwo":
      $secondTitle.show();
      gameInterval = setInterval(function(){
        createRound(2);
      }, 2800); 
      break;
    case "levelThree":
      $thirdTitle.show();
      gameInterval = setInterval(function(){
        createRound(3);
      }, 2600);
      break;
    case "levelFour":
      $fourthTitle.show();
      gameInterval = setInterval(function(){
        createRound(4);
      }, 2500);
      break;
  }

  $game.show();
}         

function createRound(level){
  var $box                  = $(".word");
  var $button1              = $("#button1");
  var $button2              = $("#button2");
  var $roundCounterElement  = $("#roundsPlayed");
  var $playerCounterElement = $("#playerScore");
  var $outerBox             = $(".box");

  var colors = colorAndWordColors.slice(0);
  var colorSelection = colors[Math.floor(Math.random()*colors.length)];
  
  // Remove chosen color so that you can't have two of the same colors
  var colorSelectionIndex = colors.indexOf(colorSelection);
  colors.splice(colorSelectionIndex, 1);

  var textSelection  = colors[Math.floor(Math.random()*colors.length)];
  var boxBackgroundColor = backgroundColors.slice(0);
  var boxBackgroundColorSelection = boxBackgroundColor[Math.floor(Math.random()*boxBackgroundColor.length)];
             
  if (roundCounter < 10){ 
    roundCounter++;
  } else {
    clearInterval(gameInterval);
    return endGame() 
  }

  // If level 3 or 4, increase the difficulty by also changing the background color
  if (level === 3) {
    $box.addClass("animated infinite shake");
  }
  if (level === 4) {
    $outerBox.css('background-color', boxBackgroundColorSelection); 
    $outerBox.addClass("animated infinite tada");
  }

  // Update the box's html and it's background
  $box.html(textSelection);
  $box.css('color', colorSelection);     

  // Update the counters in HTML
  $roundCounterElement.html(roundCounter);
  $playerCounterElement.html(playerCounter);
  
  // Set the value and color of the button
  if (createButtons() === "button1")  {
    $button1.val(textSelection);
    $button2.val(colorSelection);
  } else {
    $button2.val(textSelection);
    $button1.val(colorSelection);
  } 
}

function createButtons() {
  var randomNumber = Math.random();
  return (randomNumber < 0.5) ? "button1" : "button2"
}

function keepScore() {
  var $box = $(".word");

  if ($(this).val() === $box[0].style.color){
    return playerCounter++;  
  }
}

function endGame() {
  var $gameOver    = $("p");
  var $score       = $("#score");
  var $play        = $("#playAgain");
  var $rounds      = $("#roundsPlayed");
  var $playerscore = $("#playerScore");
  var $box         = $(".word");
  var $outerBox    = $(".box");
  
  hideEverything();

  $score.show();
  $play.show();
  $rounds.hide();
  $playerscore.hide();

  $box.html("");
  $box.css("color", "none"); 
  $outerBox.css("background-color", "none"); 

  $gameOver.html("You scored "+ playerCounter + " and played "+ roundCounter + " rounds.");
  resetCounters();     
}

function resetCounters(){
  roundCounter  = 0;
  playerCounter = 0;
}

        
        
 
        
       




