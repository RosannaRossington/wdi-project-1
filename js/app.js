        document.addEventListener("DOMContentLoaded",start); 
        $(function(){
                    $("#game").hide();
                    $("#score").hide();
                    $("#levelSelector").hide();
        });

        var buttons = document.getElementsByClassName("buttons");
        var start = document.getElementById("Start");
        var game = document.getElementById("game");
        var levelSelector = document.getElementById("levelSelector");
        
      function start(){
        Start.addEventListener("click", selectLevel);
         $(function(){
            $("#Start").click(function() {
              $(this).hide();
              $("#welcome").slideUp();
              $("#levelSelector").show();
              $("#game").hide();
          });
        });
      } 

      function selectLevel () {
        var levelOne = document.getElementById("LevelOne");
        var levelTwo = document.getElementById("LevelTwo");
        var levelThree = document.getElementById("LevelThree");
        
      LevelOne.addEventListener("click", createRound);
        $(function(){
          $("#LevelOne").click(function(){
            $("#levelSelector").hide();
            $("#game").show();
            setInterval(createRound,3000); 
          }); 
        });
      LevelTwo.addEventListener("click", createRound);
        $(function(){
          $("#LevelTwo").click(function(){
            $("#levelSelector").hide();
            $("#game").show();
            setInterval(createRound,3000); 
          });  
        });
      LevelThree.addEventListener("click", createRound);
        $(function(){
          $("#LevelThree").click(function(){
            $("#levelSelector").hide();
            $("#game").show();
            setInterval(createRound,3000);  
          });  
        });
      }

//each time a button is clicked the score will be updated
      function createRound (){
        // $(function(){
        //   $("#buttons").click(function(){
        //   ($("#Button1").animate({right: '250px'}));
        //   ($("#Button2").animate({left: '250px'}));
        //   ($(".box").slideUp());
        //   })
        // })  
        for (var i=0;i<buttons.length;i++){
         buttons[i].addEventListener("click",keepScore());{
         }
        }
       
      
        var colors = ["red","green","blue","pink","purple","yellow"]
        var colorSelection = colors[Math.floor(Math.random()*colors.length)];
        var textSelection = colors[Math.floor(Math.random()*colors.length)];
        var box = document.querySelector("li");
        var button1 = document.getElementById("Button1");
        var button2 = document.getElementById("Button2");
//apply colorSelection as a font color to text in box - apply textSelection as the text in the box          
             
                  box.innerHTML = textSelection;
                  box.style.color = colorSelection;

//apply both as the buttons but RANDOMLY - buttons can't be the same!
              function createButtons() {
                    var randomNumber = Math.random();
                    if (randomNumber < 0.5) {
                        return "button1";
                    }  else {
                        return "button2";
                    }
              }
                  if (createButtons() === "button1")  {
                      button1.value = box.innerHTML;
                      button2.value = box.style.color;
                    } else {(createButtons() === "button2")
                      button2.value = box.innerHTML;
                      button1.value = box.style.color;
                    } 
      
              
              function keepScore() {
                var roundCounter = document.getElementById("roundsPlayed");
                var playerCounter = document.getElementById("playerScore");
                var roundUp = document.querySelector("p");

                while (roundCounter ===10) {
                  if ((event.target).value === box.style.color){
                      playerCounter.innerHTML++;
                      roundCounter.innerHTML++;
                      console.log (roundCounter,playerCounter)
                  }else if ((event.target).value !== box.style.color) {
                      playerCounter.innerHTML;
                      roundCounter.innerHTML++;
                    console.log (roundCounter,playerCounter)}  
                } 
              }

      }        
          
       
 
            // loop through for 10 and then clearInterval()
  
  //when playerCounter === 5 the game will disappear and ($(".score").show());
  // function endGame() {
  // while (roundCounter ===10) {
  //     $(document).finished(function()
  //        { $("#buttons").click(function(e)
  //           {
  //            var subject = $("#game");
  //            if (e.target.id != subject.attr('id'))
  //              {subject.fadeOut();}
  //           });
  //        });
  //   }
  //  } 

  // 
        //roundUp.innerHTML = "You played"+roundCounter + "scored"+playerCounter+"."
        
 
        
       




