//  preventDefault()
document.addEventListener("DOMContentLoaded",play); 

var buttons = document.getElementsByClassName("buttons");
var playerOne = [];
var playerTwo = [];

//go through each button and listen for a click
//if clicked begin next round
//if longer than 3 seconds begin next round
//get the id of the element that fired the click
  function play (){
    for (var i=0;i<buttons.length;i++){
      buttons[i].addEventListener("click", calculatePoints); 
    }
  }


//update the box and buttons
  function calculatePoints (){
    var button = event.target.id;
    console.log (button);
  }

// //take final scores and return who wins  
//   function getWinner(playerOne,playerTwo){
  
//   }