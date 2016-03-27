document.addEventListener("DOMContentLoaded",start); 


  var buttons = document.getElementsByClassName("buttons");
  // var start = document.getElementById("Start");
  var game = document.getElementById("game");
  var levelSelector = document.getElementById("levelSelector");
     
function start(){
    $("#game").hide();
    $("#score").hide();
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
     $(function(){
      $("#score").hide();
       $("#game").show();
         setInterval(createRound,2000); 
       }); 
    } else if (((this).id) === ("LevelTwo")) {
      $(function(){
        $("#score").hide();
        $("#game").show();
          setInterval(createRound,1000); 
        });
    } else if (((this).id) === ("LevelThree")) {
      $(function(){
        $("#score").hide();
        $("#game").show();
          setInterval(createRound,100); 
        });
    } else if (((this).id) === ("LevelFour")) {
      $(function(){
        $("#score").hide();
        $("#game").show();
          setInterval(createRound,1000);
        });
}    

function createRound (){  
  var colors = ["red","green","blue","pink","purple","yellow"]
  var colorSelection = colors[Math.floor(Math.random()*colors.length)];
  var textSelection = colors[Math.floor(Math.random()*colors.length)];

  var boxBackgroundColor = ["orange","Blanched Almond"];
  var boxBackgroundColorSelection = boxBackgroundColor[Math.floor(Math.random()*colors.length)];

  var box = document.querySelector("li");
  
  var button1 = document.getElementById("Button1");
  var button2 = document.getElementById("Button2");
//apply colorSelection as a font color to text in box - apply textSelection as the text in the box          
  
  // console.log(this)
  //$( this ).css( "background-color" );

      box.innerHTML = textSelection;
      box.style.color = colorSelection;       

  for (var i=0;i<buttons.length;i++){
   buttons[i].addEventListener("click",keepScore);
   }

       if (createButtons() === "button1")  {
           button1.value = box.innerHTML;
           button2.value = box.style.color;
        } if ((button1.value) === (button2.value)) {
          createButtons()
         }
       else if (true) {} {(createButtons() === "button2")
           button2.value = box.innerHTML;
           button1.value = box.style.color;
         } if ((button1.value) === (button2.value)) {
          createButtons()
         }
       }

//working button but sometimes the same
    // if (createButtons() === "button1")  {
    //     button1.value = box.innerHTML;
    //     button2.value = box.style.color;
    //   } else {(createButtons() === "button2")
    //     button2.value = box.innerHTML;
    //     button1.value = box.style.color;
    //   } 
    // }
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

  //log a game that has not been clicked             
  if (roundCounter < 10){ 
    if ((event.target).value === box.style.color){
        playerCounter++;
    }
    roundCounter++;    
    } else if ((event.target).value !== box.style.color){
      roundCounter++;
      playerCounter;
  } else { endGame()
    console.log ("10 games")
    console.log(playerCounter,roundCounter)  
  } 

    roundCounterElement.innerHTML = roundCounter;
    playerCounterElement.innerHTML = playerCounter;

}        

    
  function endGame() {
    console.log ("Game Over")
    $(function(){
      $(function(){
        ($("#score").show());
        ($("#game").fadeOut());
        clearInterval();
      })
    })
  }
   
  
  // 
        //roundUp.innerHTML = "You played"+roundCounter + "scored"+playerCounter+"."
        
 
        
       




