let oneScore;
let twoScore;
let playerChange;
let textEl =document.getElementById("whoseturn");

export function resetScore(){
  oneScore = 0;
  twoScore = 0;
  playerChange = 2;
  textEl.innerHTML = "Player 1 turn over two cards to try and find a match"
}

export function whatScore(){
    const scoreEl = document.getElementById("playerOneScore");
    const player2scoreEl = document.getElementById("playerTwoScore")
  scoreEl.innerHTML = "Player 1 =" + oneScore 
  player2scoreEl.innerHTML = "Player 2 =" + twoScore
}
export function samePlayer (){
  textEl.innerHTML = "Well done ! You found a pair. Have another go"
  if (playerChange % 2 === 0) { oneScore = oneScore + 1
  } else {
    twoScore = twoScore + 1
  }
  //this is called in isItAMatch when it is a match and the playerChange increases by 1
  //if playerChange is even add 1 to oneScore else add 1 to twoScore 
}

export function changePlayer (){
  textEl.innerHTML = "No pair was found - change player" 
  // this is called in isItAMatch when it isnot a match and playerChange remains as it is 
  playerChange = playerChange + 1
}

export function endGame(){
 // need to input the final results for oneScore and twoScore and write text to say who won and click button for new game
 const scoreEl = document.getElementById("playerOneScore"); //gets the element
 let content1 = scoreEl.innerHTML //gets all the content
 const player2scoreEl = document.getElementById("playerTwoScore")
 let content2 = player2scoreEl.innerHTML
 console.log(scoreEl, player2scoreEl)
let scoreOne = content1.match(/\d+/);
let scoreTwo = content2.match(/\d+/);

  if (scoreOne > scoreTwo) {
textEl.innerHTML = "Congratulations Player 1 - you win - click on NEW GAME to play again."
}
else if (scoreOne === scoreTwo){
  textEl.innerHTML = "It's a tie - click on NEW GAME to play again."
} else {
  textEl.innerHTML = " Congratulations Player 2 - you win - click on NEW GAME to play again."
}
  }
 