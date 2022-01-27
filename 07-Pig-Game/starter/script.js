'use strict';
const player0 =  document.querySelector('.player--0');
const player1 =  document.querySelector('.player--1');
const diceEl =  document.querySelector('.dice');
const score0El  = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const currentScore0El = document.getElementById('current--0');
const currentScore1El = document.getElementById('current--1');
//both are same;selecting the elements

const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const scores = [0,0];
let currentScore = 0;
let activePlayer = 0;
score0El.textContent=0;
score1El.textContent=0;
//hide the dice before starting the dice
diceEl.classList.add('hidden');

//Rolling dice functionality
btnRoll.addEventListener('click', function()
{
// 1. Generate a random number
const dice = Math.trunc(Math.random()*6)+1;
console.log(dice);
// 2.Display the dice
diceEl.classList.remove('hidden');
//2.a Now in html we have only one dice image, we need to show the different dice image based on rolling
diceEl.src = `dice-${dice}.png`;
// if the rolled dice is 1, then switch to next player
if(dice!==1){
//add the dice to current score
currentScore = currentScore + dice;
document.getElementById(`current--${activePlayer}`).textContent = currentScore;//This records the score dynamically for both users
// currentScore0El.textContent = currentScore;this only records score for player 0
//change later

}
else{
//switch the user
document.getElementById(`current--${activePlayer}`).textContent = 0;
currentScore = 0;
activePlayer = activePlayer === 0 ? 1 : 0; //If the active player is 0 then change the turn to player 1. else keep the active player as 0;

player0.classList.toggle('player--active');
player1.classList.toggle('player--active')
}
});
