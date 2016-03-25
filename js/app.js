        document.addEventListener("DOMContentLoaded",start); 

        var buttons = document.getElementsByClassName("buttons");

        function start (){
            for (var i=0;i<buttons.length;i++){
              buttons[i].addEventListener("click", play); 
            }
        }

//on click log score and start next round
//get the id of the element that fired the click & compare to box id
//if clicked begin next round
//if longer than 3 seconds begin next round
        function play (){
          var colors = ["red","green","blue","pink","purple","yellow"]
          var colorSelection = colors[Math.floor(Math.random()*colors.length)];
          var textSelection = colors[Math.floor(Math.random()*colors.length)];

          var box = document.querySelector("li");

          var button1 = document.getElementById("Button1");
          var button2 = document.getElementById("Button2");
          
          //apply colorSelection as a font color to text in box
          //apply textSelection as the text in the box
          //apply both as the buttons
          box.innerHTML = textSelection;
          box.style.color = colorSelection;

          button1.value = textSelection;
          button2.value = colorSelection;

// //Jquery
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
        }    
         
         

        //   // var box = document.querySelector("li").id;
        //   var button = event.target.value;
          
        //   var playerScore = 0;
          
        //   console.log (button);
        //   console.log (box);
        
        //   if (button === box) {
        //     playerScore++;
        //       nextRound();
        //   }
        //   else if (button !== box) {
        //     playerScore;
        //      nextRound();
        //   }
        //   console.log (playerScore);
        // }


