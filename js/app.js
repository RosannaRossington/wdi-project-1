        document.addEventListener("DOMContentLoaded",start); 

        var buttons = document.getElementsByClassName("buttons");

        function start (){
            for (var i=0;i<buttons.length;i++){
              buttons[i].addEventListener("click", play); 
            }
        }

//play on loop - when button clicked OR if 3 seconds up
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
          console.log (box.style.color)

          //apply both as the buttons but RANDOMLY
          //buttons can't be the same!
        function buttonValue() {
              var randomNumber = Math.random();
              if (randomNumber < 0.5) {
                  return "button1";
              }  else {
                  return "button2";
              }
        }
              if (buttonValue() === "button1") {
              button1.value = textSelection;
              button2.value = colorSelection;
              } else {
              button2.value = textSelection;
              button1.value = colorSelection;
            }
   //winning combo is value of button clicked === box.style.color           
            function keepScore (){
              var player1Score = 0;
              var player2Score = 0;
             
              if (event.target.value === box.style.color) {
                  player1Score++;
                
              }
              else if (event.target.value !== box.style.color) {
                  player1Score;
                  
                }
              console.log (player1Score);
             }  
             keepScore()
        }     
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

          //if no click on button in 3 seconds
          //$(function timeUp(){
          //   $('li').on("click",function() {
          //     ($(this).slideUp("class"));
          //   });
          // });
        
 
        
       




