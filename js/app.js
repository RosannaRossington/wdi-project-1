//  preventDefault()
document.addEventListener("DOMContentLoaded",start); 

var buttons = document.getElementsByClassName("buttons");

//go through each button and listen for a click

  function start (){
    for (var i=0;i<buttons.length;i++){
      buttons[i].addEventListener("click", play); 
    }
  }

//on click log score and start next round
//get the id of the element that fired the click & compare to box id
//if clicked begin next round
//if longer than 3 seconds begin next round
  
  function nextRound(){
    
  }

  function play (button,box){
    var button = event.target.value;
    var box = document.querySelector("li").id;
    var playerScore = 0;
    
    console.log (button);
    console.log (box);
  
    if (button === box) {
      playerScore++;
        nextRound();
    }
    else if (button !== box) {
      playerScore;
       nextRound();
    }
    console.log (playerScore);
  }

//think twitter append - update html and then slide off
  // function nextRound (){
  //    var button1Update =
  //    var button2Update = 
  //    var boxUpdate =
  //    var game = <section class="box">
      //   <li id="black">+White+</li>    
      //   </section>
      //   <section class="buttons">
      //   <div><input type="button" value="WHITE" id="button1"></div>
      //   <div><input type="button" value="BLACK"id="button2"></div>
      //   </section>
  // }

// //take final scores and return who wins  
//   function getWinner(playerOne,playerTwo){
  // var score = document.querySelector("p");
  // score.innerHTML = "Player 1 scores " + playerScore + "."
  // };
//   }