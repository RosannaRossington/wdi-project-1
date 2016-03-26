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

      function play(){
          for (var i=0;i<buttons.length;i++){
              buttons[i].addEventListener("click", createRound);
          } 
      }

      function createRound (play){

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
                    
          //Once we have a triggered an event, inside the callback the value of this will be the DOM element that fired the event.
          //if there has not been a click event on #buttons
          //then hide buttons
          //when button or game is clicked game is removed

          //only want to do this if not clicked

               $(document).ready(function()
                {
                  $("#buttons").click(function(e)
                   {
                    var subject = $("#game");

                    if (e.target.id != subject.attr('id'))
                      {
                          subject.fadeOut();
                      }
                   });
                });
      } 
      // //instead of click it should be on no click
      // $(function timeUp(){
      //   if ($('#buttons').click != (this).target.id )
      //   $('#buttons').click on("click", function() {
      //      $(this).hide();
      //    });
      // });
      // $(function timeUp()
      // {
      //      $('#game').hide([300],[complete]);
         
      // });
 
               
     

        //play on loop up to playerScore 5 - when button clicked OR if 3 seconds up
        //winning combo is value of button clicked === box.style.color  
        //log point1 and play again
        //play 5 times   
              
              // function keepScore(){
              //   var player1Score = 0;
              //     // while (player1Score <= 5) {
              //        if (event.target.value === box.style.color) {
              //           player1Score +=1
              //          }
              //        else if (event.target.value !== box.style.color) {
              //            player1Score
              //         }
              //         //not clicked after x seconds 
              //         else if (event.target.value === null) {
              //             $(function(){
              //               $('#start').on("click", function() {
              //               $('#game').toggle();
              //               });
              //             });
              //         } 
              // }      




//when button is clicked game is removed
              // $(document).ready(function()
              //  {
              //    $("#buttons").mouseup(function(e)
              //     {
              //      var subject = $("#game");

              //      if (e.target.id != subject.attr('id'))
              //        {
              //            subject.fadeOut();
              //        }
              //     });
              //  });


//when game is clicked buttons are removed
                   // $(document).ready(function()
                   //  {
                   //    $("#game").mouseup(function(e)
                   //     {
                   //      var subject = $("#buttons");

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

        
        
 
        
       




