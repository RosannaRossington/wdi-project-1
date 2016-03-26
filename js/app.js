        document.addEventListener("DOMContentLoaded",start); 

        var buttons = document.getElementsByClassName("buttons");
        var start = document.getElementById("Start");
        var game = document.getElementById("game");


      function start(){
        Start.addEventListener("click", createRound);
       $(function(){
          $("#Start").on("click",function() {
            ($(this).remove("#Start"));
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
                for (var i=0;i<buttons.length;i++){
                    buttons[i].addEventListener("click",createRound);
                } 
            }   
     // function keepScore(){
     //   var player1Score = 0;
     //     // while (player1Score <= 5) {
     //        if (event.target.value === box.style.color) {
     //           console.log (player1Score +=1)
     //          }
     //        else if (event.target.value !== box.style.color) {
     //            console.log (player1Score)
     //         }
     // } 

        //play on loop up to playerScore 5 - when button clicked OR if 3 seconds up
        //winning combo is value of button clicked === box.style.color  
        //log point1 and play again
        //play 5 times   
              
              
              //         //not clicked after x seconds 
              //         else if (event.target.value === null) {
              //             $(function(){
              //               $('#start').on("click", function() {
              //               $('#game').toggle();
              //               });
              //             });
              //         } 
              // } 

              //After 5     
              // $(document).ready(function()
              //  {
              //    $("#buttons").click(function(e)
              //     {
              //      var subject = $("#game");

              //      if (e.target.id != subject.attr('id'))
              //        {
              //            subject.fadeOut();
              //        }
              //     });
              //  });

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

        
        
 
        
       




