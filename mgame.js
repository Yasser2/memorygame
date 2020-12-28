let timer;

let gameStarted = false;

let buttonsList = Array.from(document.getElementsByClassName("card"));
      //'enabledButtonsList' is a list of buttons that are enabled 
      // if a button is not in the list it will be disabled.
let enabledButtonsList = buttonsList;
let secs = 0;
let mins = 0;
// 'ShuffledCardsSymbolsList' will be filled with the symbols but shuffled.
let ShuffledCardsSymbolsList = [];
// 'NotShuffledCardsSymbolsList' is a list of symbols but not shuffled.
let NotShuffledCardsSymbolsList = ["","","","","","","","","","","","","","","",""];

let matchingCardsList = [];
// 'selectedCard1' is the first selected card
// and 'selectedCard2' is the second selected card
// and thier symbols will be compared
// if the symbols are the same
// these two buttons will be removed from 'enabledButtonsList' and thier color will be green
// and these two buttons will be added to 'matchingCardsList'
// and if the symbols are diffrent
// all the buttons will be removed from 'enabledButtonsList' for a second
//and the color of the buttons will be red for a second
let selectedCard1;
let selectedCard2;
let selectedCard1Symbol = "";
let selectedCard2Symbol = "";
//'selectedCards' is the number of selected cards
let selectedCards = 0;


let moves = 0;
//'matchingCards' is the number of matching cards.
let matchingCards = 0;
   

//shuffle cards
   function fillCardsSymbolsList() {

      for (let i = 0; i < NotShuffledCardsSymbolsList.length; i++) {
         const randomNumber = Math.floor(Math.random()*(NotShuffledCardsSymbolsList.length-1));
      
      const element = NotShuffledCardsSymbolsList[i];
      const randomlyChosenElement = NotShuffledCardsSymbolsList[randomNumber];
      NotShuffledCardsSymbolsList[i] = randomlyChosenElement;
      NotShuffledCardsSymbolsList[randomNumber]=element;
       }
       //'NotShuffledCardsSymbolsList' is now shuffled.
   ShuffledCardsSymbolsList = NotShuffledCardsSymbolsList;
   // 'NotShuffledCardsSymbolsList' becomes not shuffled again.
   NotShuffledCardsSymbolsList = ["","","","","","","","","","","","","","","",""];
   
      }

//sets a timer.
  function startTimer(){

      timer = setInterval(() => {
      
      
               if(secs<59){
               secs+=1;
               document.getElementById("secs").textContent = secs;
               }else{
                  secs = 0;
                  mins+=1;
                  document.getElementById("mins").textContent = mins;
                  document.getElementById("secs").textContent = secs;
               }
      
      
      
      }, 1000);


   

      
}

// sets the selected card to 'selectedCard1' if it is the first selected card
// and to 'selectedCard2' if it is the second selected card.
// 'selectedcards' is the number of selected cards.
   function prepareCardsThatWillBeCompared(button) {

      if(selectedCards==0){
         selectedCards+=1;
         selectedCard1Symbol = ShuffledCardsSymbolsList[buttonsList.indexOf(button)];
         selectedCard1 = button;
   
               }else if(selectedCards==1){
         selectedCards==0;
   
         selectedCard2Symbol = ShuffledCardsSymbolsList[buttonsList.indexOf(button)];
         selectedCard2 = button;
         checkCardsEquality();
               }
   
   }









// check if 'selectedCard1' == 'selectedCard2'
function checkCardsEquality(){

   if (selectedCard1Symbol == selectedCard2Symbol && selectedCard1 != selectedCard2 && matchingCards!= 16) {
      matchingCards+=2;
      moves += 1;

   enabledButtonsList=enabledButtonsList.filter(element => element != selectedCard1 )
   enabledButtonsList=enabledButtonsList.filter(element => element != selectedCard2 )  

   matchingCardsList.push(selectedCard1,selectedCard2)

 selectedCard1.style = 'background-color:green;color:white;'
selectedCard2.style = 'background-color:green;color:white;'

   


    selectedCard1;
    selectedCard2;
    selectedCards = 0;

   }else if(selectedCard1 != selectedCard2){
      moves += 1;
      changeCardColorToRedForASecond();
}
   
document.getElementById("moves").textContent = moves;
//result is that is shown at the end of the game.
document.getElementById("resultMoves").textContent = moves;


checkIfStarsRatingMustBeChanged();
// ends the game if all cards are matched.
endGame();

}







 function checkIfStarsRatingMustBeChanged() {
   if(moves>8&&moves<18){
      document.getElementById("stars").textContent = "★ ★";
      //result is that is shown at the end of the game.
      document.getElementById("starsResult").textContent = "★ ★";
         }
      
      
         if(moves>18){
            document.getElementById("stars").textContent = "★";
            //result is that is shown at the end of the game.
            document.getElementById("starsResult").textContent = "★";
               }

               
}


// ends the game if all cards are matched.
 function endGame() {
   if (matchingCards==16) {
      clearInterval(timer);
      setTimeout(() => {
//result is that is shown at the end of the game.
         document.getElementById("result").style = "display:inline-block;"
         document.getElementById("resultMins").textContent = mins;
         document.getElementById("resultSecs").textContent = secs;
      }, 500);

   }
}




//changes color to red for a second because cards did not match
// and remove all the buttons from enabled buttons list for a second.
function changeCardColorToRedForASecond() {



   enabledButtonsList = [];

selectedCard1.style = 'background-color:red;color:white;' 
selectedCard2.style = 'background-color:red;color:white;'


 setTimeout(() => {

      selectedCard1.style = 'background-color:grey;color:grey;' 
            // sets the textContent to a square.
      selectedCard1.textContent = "□";
 
    selectedCard2.style = 'background-color:grey;color:grey;'
          // sets the textContent to a square.
    selectedCard2.textContent = "□";


// this for loop adds all the buttons to 'enabledButtonsList' 
// except the matched cards that are green
    for (let i = 0; i < 16; i++) {
      
      if (matchingCardsList.includes(buttonsList[i]) == false) {
         enabledButtonsList.push(buttonsList[i]);
  
      }

   }

   selectedCard1;
   selectedCard2;
   selectedCard1Symbol = "";
   selectedCard2Symbol = "";
   selectedCards = 0;
   }, 300);







  
}









//retry
function retry(){
//clears the timer.
clearInterval(timer);


for (let i = 0; i < 16; i++) {
      buttonsList[i].style = 'background-color:grey;color:grey;' 
      // sets the textContent to a square.
      buttonsList[i].textContent = "□";
      
   }
   // reseting all the values
   gameStarted = false;
   buttonsList = Array.from(document.getElementsByClassName("card"));
   enabledButtonsList = buttonsList;
   secs = 0;
   mins = 0;
   ShuffledCardsSymbolsList= [];

   
   matchingCardsList = [];
   
   selectedCard1;
   selectedCard2;
   selectedCard1Symbol = 0;
   selectedCard2Symbol = 0;
   selectedCards = 0;
   
   
   moves = 0;
   matchingCards = 0;


document.getElementById("stars").textContent = "★★★";
//result is that is shown at the end of the game.
document.getElementById("starsResult").textContent = "★★★";




//shuffle cards again.
fillCardsSymbolsList()


document.getElementById("secs").textContent = 0;
document.getElementById("mins").textContent = 0;

//result is that is shown at the end of the game.
document.getElementById("resultMins").textContent = 0;
document.getElementById("resultSecs").textContent = 0;

//result is that is shown at the end of the game.
document.getElementById("result").style = "display:none;"



document.getElementById("moves").textContent = "0";
//result is that is shown at the end of the game.
document.getElementById("resultMoves").textContent = "0";

}














   


fillCardsSymbolsList()
document.getElementById("game").addEventListener("click",function (event) {
 
   if (enabledButtonsList.includes(event.target)) {

      if (gameStarted == false) {
         gameStarted = true;
         startTimer();
      }


         event.target.style = 'color:white;background-color:blue;'

         event.target.textContent = ShuffledCardsSymbolsList[buttonsList.indexOf(event.target)]

prepareCardsThatWillBeCompared(event.target);

   }
    


});


document.getElementById("playAgain").addEventListener("click",function() {retry()})
document.getElementById("retry").addEventListener("click",function() {retry()})
