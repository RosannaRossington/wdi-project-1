document.addEventListener("DOMContentLoaded",start); 

  var buttons = document.getElementsByClassName("buttons");
  // var start = document.getElementById("Start");
  var game = document.getElementById("game");
  var levelSelector = document.getElementById("levelSelector");
  var roundCounter = 0;
  var playerCounter = 0;
     
function start(){
    $("#game").hide();
    $("#score").hide();
    $("#firstTitle").hide();
    $("#secondTitle").hide();
    $("#thirdTitle").hide();
    $("#fourthTitle").hide();
    $("#levelSelector").hide();
    
    Start.addEventListener("click", selectLevel);
    $(function(){
      $("#Start").click(function() {
        ($(this).hide());
        ($("#welcome").slideUp());
        $("#levelSelector").show();
      });
    });
} 

function selectLevel () {
  var levelOne = document.getElementById("LevelOne");
  var levelTwo = document.getElementById("LevelTwo");
  var levelThree = document.getElementById("LevelThree");
  var levelFour = document.getElementById("LevelFour");
  
    LevelOne.addEventListener("click", setLevel);
      $(function(){
        $("#LevelOne").click(function(){
          $("#levelSelector").hide();
        }); 
      });
    LevelTwo.addEventListener("click", setLevel);
      $(function(){
        $("#LevelTwo").click(function(){
          $("#levelSelector").hide();
        });  
      });
    LevelThree.addEventListener("click", setLevel);
      $(function(){
        $("#LevelThree").click(function(){
          $("#levelSelector").hide(); 
        });  
      });
    LevelFour.addEventListener("click", setLevel);
      $(function(){
        $("#LevelFour").click(function(){
          $("#levelSelector").hide(); 
        });  
      });
}

function setLevel(){
    if (((this).id) === ("LevelOne")) { 
      $("#firstTitle").show();
      $("#game").show();
      setInterval(createRound,2500);
    } else if (((this).id) === ("LevelTwo")) {
      $("#secondTitle").show();
      $("#game").show();
      setInterval(createRound,1500); 
    } else if (((this).id) === ("LevelThree")) {
      $("#thirdTitle").show();
      $("#game").show();
      setInterval(createRound,1000); 
    } else if (((this).id) === ("LevelFour")) {
      $("#fourthTitle").show();
      $("#game").show();
      $("#score").hide();   
      createRound(this.id);
    }
}         

function createRound(level){
  var colors = ["red","green","blue","pink","purple","yellow","orange","black","turquoise","brown"]
  var colorSelection = colors[Math.floor(Math.random()*colors.length)];
  var textSelection = colors[Math.floor(Math.random()*colors.length)];

  var boxBackgroundColor = ["snow","oldlace","lightsalmon","lime","palevioletred","darkgrey","firebrick","seagreen", "lightgreen","papayawhip"];
  var boxBackgroundColorSelection = boxBackgroundColor[Math.floor(Math.random()*boxBackgroundColor.length)];

  var box = document.querySelector("li");
  var button1 = document.getElementById("Button1");
  var button2 = document.getElementById("Button2");

  var roundCounterElement = document.getElementById("roundsPlayed");
  var playerCounterElement = document.getElementById("playerScore");
  
  var box = document.querySelector("li");

             
  if (roundCounter < 10){ 
    console.log ("this is round " + roundCounter) 
    roundCounter++;
  } else {
    endGame(roundCounter,playerCounter) 
  }
//apply colorSelection as a font color to text in box - apply textSelection as the text in the box    
// console.log (boxColor)      
    if (level === "LevelFour")  {
      $(box).html(textSelection);
      $(box).css('color', colorSelection);
      $(".box").css('background-color', boxBackgroundColorSelection); 
      setInterval(function(){
        createRound(level);
      },1750);
    } else { 
      $(box).html(textSelection);
      $(box).css('color', colorSelection);
    }      

  // for (var i=0;i<buttons.length;i++){
  //  buttons[i].addEventListener("click",keepScore);
  // }

//logging a round even if not clicked but point also 
//if element clicked score logged 
   $('.button').each(function(index, element) {
      $(element).off("click");
      $(element).one("click", function() {
        keepScore(box);
      });
    });
   roundCounterElement.innerHTML = roundCounter;
   playerCounterElement.innerHTML = playerCounter;
   

//buttons to not be the same
// function assignButtons () {
//        if (createButtons() === "button1"){
//            button1.value = box.innerHTML;
//            button2.value = box.style.color;
//           } if ((button1.value) === (button2.value)){
//           createButtons()
//          } else if (createButtons() === "button2") {
//            button2.value = box.innerHTML;
//            button1.value = box.style.color;
//          } if ((button1.value) === (button2.value)) {
//           createButtons()
//            }
// }           

//working button but sometimes the same
    if (createButtons() === "button1")  {
        button1.value = box.innerHTML;
        button2.value = box.style.color;
      } else {(createButtons() === "button2")
        button2.value = box.innerHTML;
        button1.value = box.style.color;
      } 
}


function createButtons() {
  var randomNumber = Math.random();
    if (randomNumber < 0.5) {
        return "button1";
    }   else {
        return "button2";
    }
}

function keepScore(box) {
  if ((event.target).value == box.style.color){
    playerCounter++;   
    console.log(playerCounter)
  } 
}

function endGame(rounds,user) {
  var gameOver = document.querySelector("p");
  var play = document.getElementById("PlayAgain");
    $("#game").hide();
    $("#score").show();
    $("#roundsPlayed").hide();
    $("#playerScore").hide();

  PlayAgain.addEventListener("click", selectLevel);
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

        
        
 
        
       




