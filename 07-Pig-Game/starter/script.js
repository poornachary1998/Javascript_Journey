'use strict';
const diceEl =  document.querySelector('.dice');
const score0El  = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
//both are same;selecting the elements
score0El.textContent=0;
score1El.textContent=0;
//hide the dice
diceEl.classList.add('hidden');