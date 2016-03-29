$(start); 

var roundCounter  = 0;
var playerCounter = 0;
var gameInterval;
     
function start(){
  $.each([
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
    
  $("#start").on("click", runGame);
  $("#LevelOne, #LevelTwo, #LevelThree, #LevelFour").on("click", setLevel);
  $(".button").on("click", keepScore)
} 

function runGame(){
  $(this).hide();
  $("#welcome").slideUp();
  $("#levelSelector").show();
}

function setLevel(){
  $("#levelSelector").hide();

  switch (this.id) {
    case "LevelOne":
      $("#firstTitle").show();
      gameInterval = setInterval(function(){
        createRound(1);
      }, 3000);
      break;
    case "LevelTwo":
      $("#secondTitle").show();
      gameInterval = setInterval(function(){
        createRound(2);
      }, 2500); 
      break;
    case "LevelThree":
      $("#thirdTitle").show();
      gameInterval = setInterval(function(){
        createRound(3);
      }, 2000);
      break;
    case "LevelFour":
      $("#fourthTitle").show();
      $("#score").hide(); 
      gameInterval = setInterval(function(){
        createRound(4);
      }, 2000);
      break;
  }

  $("#game").show();
}         

function createRound(level){
  var colors = ["red","green","blue","pink","purple","yellow","orange","black","turquoise","brown"];
  var colorSelection = colors[Math.floor(Math.random()*colors.length)];
  
  // Remove chosen color so that you can't have two of the same colors
  var colorSelectionIndex = colors.indexOf(colorSelection);
  colors.splice(colorSelectionIndex, 1);

  var textSelection  = colors[Math.floor(Math.random()*colors.length)];
  var boxBackgroundColor = ["snow","oldlace","lightsalmon","lime","palevioletred","darkgrey","firebrick","seagreen", "lightgreen","papayawhip"];
  var boxBackgroundColorSelection = boxBackgroundColor[Math.floor(Math.random()*boxBackgroundColor.length)];

  var $box                  = $(".word");
  var $button1              = $("#button1");
  var $button2              = $("#button2");
  var $roundCounterElement  = $("#roundsPlayed");
  var $playerCounterElement = $("#playerScore");
             
  if (roundCounter < 10){ 
    roundCounter++;
  } else {
    clearInterval(gameInterval);
    endGame(roundCounter, playerCounter) 
  }

  // If level 4, increase the difficulty by also changing the background color
  if (level === 4) {
    $(".box").css('background-color', boxBackgroundColorSelection); 
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

function keepScore(box) {
  var $box = $(".word");
  if ($(this).val() === $box[0].style.color){
    return playerCounter++;  
  }
}

function endGame(rounds,user) {
  var gameOver = document.querySelector("p");
  var play = document.getElementById("PlayAgain");
    $("#game").hide();
    $("#score").show();
    $("#roundsPlayed").hide();
    $("#playerScore").hide();

    $("#PlayAgain").click(function() {
      ($(this).hide());
      $("#score").hide();
      $("#log").hide();
      $("#firstTitle").hide();
      $("#secondTitle").hide();
      $("#thirdTitle").hide();
      $("#fourthTitle").hide();
      $("#levelSelector").show();
      $("#roundsPlayed").hide();
      $("#playerScore").hide();
    });

  // $('#PlayAgain').one ()
  // $("#PlayAgain").click(selectLevel); 

  gameOver.innerHTML = "You scored "+ user + " played "+ rounds +" rounds"+ "."     
}

        
        
 
        
       




