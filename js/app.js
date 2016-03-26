        document.addEventListener("DOMContentLoaded",start); 

        var buttons = document.getElementsByClassName("buttons");
        var start = document.getElementById("Start");

        var player1Score = 0;
        var player2Score = 0;

      function start(){
        //  start.addEventListener("click", createRound); 
          for (var i=0;i<buttons.length;i++){
              buttons[i].addEventListener("click", play); 
          } 

            function play (){
                var colors = ["red","green","blue","pink","purple","yellow"]
                var colorSelection = colors[Math.floor(Math.random()*colors.length)];
                var textSelection = colors[Math.floor(Math.random()*colors.length)];

                var box = document.querySelector("li");

                var button1 = document.getElementById("Button1");
                var button2 = document.getElementById("Button2");
      //apply colorSelection as a font color to text in box
      //apply textSelection as the text in the box          
                box.innerHTML = textSelection;
                box.style.color = colorSelection;

      //apply both as the buttons but RANDOMLY
      //buttons can't be the same!
              function createButton() {
                    var randomNumber = Math.random();
                    if (randomNumber <= 0.5) {
                        return "button1";
                    }  else {
                        return "button2";
                    }
              }
                    if ((createButton() === "button1") && (textSelection !== colorSelection)) {
                      button1.value = textSelection;
                      button2.value = colorSelection;
                    } else if ((createButton() === "button2") && (textSelection !== colorSelection)){
                      button2.value = textSelection;
                      button1.value = colorSelection;
                    } else createButton();
            }
      }   
      
        

         //if button not pressed after 3 seconds        
                 // $(function timeUp(){
                 //  $('buttons').on("click",function() {
                 //    ($(this).slideUp("game"));
                 //  });
                 // });  
                 // timeUp()   
               
        //play on loop up to playerScore 5 - when button clicked OR if 3 seconds up
        //winning combo is value of button clicked === box.style.color  
        //log point1 and play again
        //play 5 times   
              
              // function keepScore(){
              //     while (player1Score <= 5) {
              //        if (event.target.value === box.style.color) {
              //           player1Score +=1
              //          }
              //        else if (event.target.value !== box.style.color) {
              //            player1Score
              //         }
              //       } 












          //Jquery - play Function
          //                       var $box = $("li");

          //                       var $button1 = $("#Button1");
          //                       var $button2 = $("#Button2");
                                
          //                       //apply colorSelection as a font color to text in box
          //                       //apply textSelection as the text in the box
          //                       //apply both as the buttons
          //                       $box.innerHTML = textSelection;
                                  //$box.css.color.colorSelection;

          //                       $button1.value = textSelection;
          //                       $button2.value = colorSelection;   

        
        
 
        
       




