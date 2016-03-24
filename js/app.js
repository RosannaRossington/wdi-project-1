console.log ("rosie");
document.addEventListener("DOMContentLoaded",start); 

var buttons = document.getElementsByClassName("buttons");

//go through each button and listen for a click
//if clicked get next round
  function start (){
    for (var i=0;i<buttons.length;i++){
      buttons[i].addEventListener("click", nextRound);
    }
  }

//
  function nextRound (){
  console.log("clicked")  
  }
