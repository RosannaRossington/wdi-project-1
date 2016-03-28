document.addEventListener("DOMContentLoaded",start); 

  var buttons = document.getElementsByClassName("buttons");
  // var start = document.getElementById("Start");
  var game = document.getElementById("game");
  var levelSelector = document.getElementById("levelSelector");
     
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
      setInterval(createRound,2000); 
    } else if (((this).id) === ("LevelTwo")) {
      $("#secondTitle").show();
      $("#game").show();
      setInterval(createRound,1000); 
    } else if (((this).id) === ("LevelThree")) {
      $("#thirdTitle").show();
      $("#game").show();
      setInterval(createRound,100); 
    } else if (((this).id) === ("LevelFour")) {
      $("#fourthTitle").show();
      $("#game").show();
      console.log(this.id);     
      createRound(this.id);
    }
}         

function createRound (level){ 
  var colors = ["red","green","blue","pink","purple","yellow"]
  var colorSelection = colors[Math.floor(Math.random()*colors.length)];
  var textSelection = colors[Math.floor(Math.random()*colors.length)];

  var boxBackgroundColor = ["orange","black","white"];
  var boxBackgroundColorSelection = boxBackgroundColor[Math.floor(Math.random()*boxBackgroundColor.length)];
//console.log ( boxBackgroundColorSelection)
  var box = document.querySelector("li");

  var boxColor = document.getElementsByClassName("box");
  
  var button1 = document.getElementById("Button1");
  var button2 = document.getElementById("Button2");
//apply colorSelection as a font color to text in box - apply textSelection as the text in the box    
// console.log (boxColor)      
    if (level === ("LevelFour"))  {
      $(box).html(textSelection);
      $(box).css('color', colorSelection);
      $(boxColor).css('backgroundColor', boxBackgroundColorSelection); 
      // console.log ($(".box"))
      setInterval(createRound,1000);
    } else { $(box).html(textSelection);
      $(box).css('color', colorSelection);
    }      

  for (var i=0;i<buttons.length;i++){
   buttons[i].addEventListener("click",keepScore);
   }

//logging a round even if not clicked
//if element clicked score logged
   // $('.button').each(function(index, element) {
 
   //    $(element).one("click", keepScore)
 
   //  });

//working button but sometimes the same
// function assignButtons () {
//        if (createButtons() === "button1"){
//            button1.value = box.innerHTML;
//            button2.value = box.style.color;
//           } if ((button1.value) === (button2.value)){
//           createButtons()
//         } else if (createButtons() === "button2") {
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
                  
function keepScore() {
  var roundCounterElement = document.getElementById("roundsPlayed");
  var playerCounterElement = document.getElementById("playerScore");
  
  var roundCounter = parseInt(roundCounterElement.innerHTML);
  var playerCounter = parseInt(playerCounterElement.innerHTML);
  var box = document.querySelector("li");

  console.log (playerCounter,roundCounter) 
             
  if (roundCounter < 10){ 
    if ((event.target).value === box.style.color){
        playerCounter++;
        roundCounter++;    
    } else if ((event.target).value !== box.style.color){
        roundCounter++;
  } else { endGame() 
    console.log (playerCounter,roundCounter) 
    } 
  }
    roundCounterElement.innerHTML = roundCounter;
    playerCounterElement.innerHTML = playerCounter;
  
 
  function endGame() {
    var gameOver = document.querySelector("p");
    var playAgain = document.getElementById("PlayAgain");

    PlayAgain.addEventListener("click", selectLevel);
    
    // $("#PlayAgain").click(selectLevel); 

      $("#game").hide();
        clearInterval();
      $("#score").show();
        $("#score").animate({left: '250px'});
    
    gameOver.innerHTML = "You played "+ roundCounter + " scored "+ playerCounter +" ."

  console.log ("gameOver")
  console.log (playerCounter,roundCounter)       
  }
}


        
        
 
        
       




