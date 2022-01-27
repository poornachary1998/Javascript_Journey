'use strict';
// We will learn how Java script works when we click on the modal button
//How the hidden contnet shows up and how the background becomes the blurred image
//button to close the modal window
//we need to develop to close the content after hitting esc key
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnClose = document.querySelector('.close-modal');
// Now we want show  modal buttons, but we have  3 buttons
const btnOpen = document.querySelector('.show-modal');
//Now if we inspect the code we can see there will be only one show modal is appeared not all 3
//here comes the limitation of queryselector
