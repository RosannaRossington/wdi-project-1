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
  //event listener is within the function called by setInterval,      
      
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
      }


      function setLevel(){
          if (((this).id) === ("LevelOne")) {
           $(function(){
              $("#keepScore").show();
             $("#game").show();
               setInterval(createRound,2000); 
             }); 
          } else if (((this).id) === ("LevelTwo")) {
            $(function(){
              $("#game").show();
                setInterval(createRound,1000); 
              });
          } else if (((this).id) === ("LevelThree")) {
            $(function(){
              $("#game").show();
                setInterval(createRound,100); 
              });
          }
      }    

      function createRound (){
      
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
        
 
        
       




