        document.addEventListener("DOMContentLoaded",start); 

        var buttons = document.getElementsByClassName("buttons");
        var start = document.getElementById("Start");
        var game = document.getElementById("game");


      function start(){
        Start.addEventListener("click", createRound);
         $(function(){
            $("#Start").on("click",function() {
              ($(this).remove("#Start"));
              setInterval(createRound,3000);
                
          });
        });
      } 


      function createRound (){

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
              
              play()       
      } 
 
            function play(){
              var player1Score = 0;

                for (var i=0;i<buttons.length;i++){
                 buttons[i].addEventListener("click",createRound);
               console.log (player1Score +=1)
             }
                //if (event.target.value === box.style.color) 
                //           console.log (player1Score +=1)
                //           createRound()
                //       }
                // else if (event.target.value !== box.style.color) {
                //         console.log (player1Score)
                //         createRound()
                //      }
                // else {timeUp()}     
                // } 

            }

  
        
        
 
        
       




