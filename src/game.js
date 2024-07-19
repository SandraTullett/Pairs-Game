
let letters = ["A", "A", "B", "B", "C", "C", "D", "D", "E", "E", "F", "F", "G", "G", "H", "H"];
let newArray;
let playerChange =0

import { startTimer } from "./timer.js";
import {resetScore, whatScore} from "./playerscore.js";
import { samePlayer} from "./playerscore.js";
import { changePlayer } from "./playerscore.js";
import {endGame} from  "./playerscore.js";

myNewGameFunction()

//revealCard function allows cards to be turned over to reveal letters//
// funtions are called to carry out the first step of the game - will need to add a loop to 
// check whether all cards are disabled. If not go through loop to turn two more cards until all are disabled//
export function revealCard(button, index) {
  console.log("reveal")
  let cardsLeft= 16
    //when a button is clicked ? is replaced by corresponding letter from newArray
    console.log (cardsLeft)
  button.innerHTML = newArray[index];
  //calls function to output the two letters for a match check and starts timer//
  let arr = checkLettersOnShow ();

  if (arr === undefined){
    return
  }
  let [firstLetter, secondLetter] = arr;

  console.log(firstLetter, secondLetter),
//if match then disable those two buttons and turn letter to a * else turn them back to ? if not a match//
  isItAMatch (firstLetter, secondLetter, playerChange);
whatScore ()
  //if (disableButtons) {removeLetters(firstLetter, secondLetter)
    //if buttons are disabled remove letters from inner.HTML 

  let anyCardsLeft = checkCardsLeftToTurn();

  cardsLeft = anyCardsLeft
  if (cardsLeft <2){
    endGame ()
    console.log ("End Game")
  }
 }


//shuffleArray mixes up the letters ready for a game//
function shuffleArray(originalArray) {
  let pairsArray = originalArray.slice();
  for (let i = pairsArray.length - 1; i > 0 > 0; i--) {
    //this generates a random number between 0 and i inclusive   
    const j = Math.floor(Math.random() * (i + 1));

    //swap elements at indices 1 and j
    [pairsArray[i], pairsArray[j]] = [pairsArray[j], pairsArray[i]];
  }
  return pairsArray
}


//checkLettersOnShow outputs the two letters so that they can next be checked if a pair//
function checkLettersOnShow() {
  let buttons = document.querySelectorAll('.cardChoice');
  let letterArray = [];
  // let faceUpCount = Array.from(buttons).filter(function (button) { return button.innerHTML !== "?" }).length;
  for (let index = 0; index < buttons.length; index++) {
    //if content is ? ignore else push into array
    const button = buttons[index];
    if (button.innerHTML !== "?" && button.innerHTML !== "*") {
      letterArray.push(button.innerHTML)
    }
  }
  let faceUpCount = letterArray.length;
 //if there are two letters on show then start the time for 5 seconds//
  if (faceUpCount >= 2){
      startTimer();
      console.log(letterArray[0]);
      let letter1 = letterArray[0];
      let letter2 = letterArray[1];
    return [letter1, letter2];
  }
}
function isItAMatch(letter1, letter2,) {
  let pairCheck = letter1;
if (letter1 !== letter2) {
  itsNotaMatch();
  changePlayer();
 console.log ("No match - change player")
} else {
  disableButtons(pairCheck);
  samePlayer();
  //need to write this to HTML and say well done, increase the score and say'go again
  console.log ("It's a match - same player");
return
}
}

function itsNotaMatch(){
//in this function change letter back to a ? and change players
setTimeout(function(){
const el = document.getElementById("buttoncontainer");
for (let i = 0; i < el.children.length; i++) {
  const button = el.children[i];
  if (button.innerHTML !== "?" && button.innerHTML !== "*") {
    button.innerHTML = "?";
  }
}},4000);

}

// in this function button is disabled (used in 'Is it a match') and changed to a *
function disableButtons(cardLetter) {
  setTimeout(function(){
  const el = document.getElementById("buttoncontainer");
  for (let i = 0; i < el.children.length; i++) {
    const button = el.children[i];
    if (button.innerHTML === cardLetter) {
      button.innerHTML = "*"
      console.log(button.innerHTML);
      button.disabled = true;
    }
  }},4000);
}

//check if there are two or more'? left. If so continue, if not end game
function checkCardsLeftToTurn() {
  let buttons = document.querySelectorAll('.cardChoice');
  let notLetterArray = [];
    for (let index = 0; index < buttons.length; index++) {
//if content is ? push into array else ignore (I wanted to just do a count but couldn't do it!)
      const button = buttons[index];
      if (button.innerHTML === "?") {
        notLetterArray.push(button.innerHTML);
      }
    }  
         console.log(notLetterArray.length)
      return notLetterArray.length;
    } 
    
   export function myNewGameFunction() {
    resetScore();
    whatScore();
    //letter are rearranged ready for a new game//
    newArray = shuffleArray(letters);
    console.log(newArray);
  
    let buttons = document.querySelectorAll('.cardChoice');
    buttons.forEach((button, index) => {
      button.disabled = false;
      button.innerHTML = "?";
      // Setup buttons - if you click a button the function revealCard runs
      button.onclick = function () { revealCard(button, index) }
    });
   }
