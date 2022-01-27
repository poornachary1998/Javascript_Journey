'use strict';
// We will learn how Java script works when we click on the modal button
//How the hidden contnet shows up and how the background becomes the blurred image
//button to close the modal window
//we need to develop to close the content after hitting esc key
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnClose = document.querySelector('.close-modal');
// Now we want show  modal buttons, but we have  3 buttons
const btnOpen = document.querySelectorAll('.show-modal');
//Now if we inspect the code we can see there will be only one show modal is appeared not all 3
//here comes the limitation of queryselector, only the first element selected if there are multiple same elements
//user querySelectorAll()
console.log(btnOpen);
// Now we get a node list. showing all 3 buttons

// we are using for loop now, to show the content when we click on modal
//same operation for all 3 buttons
const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};
for (let i = 0; i < btnOpen.length; i++)
  //   console.log(btnOpen[i].textContent);
  //adding event listen when the button is clicked

  btnOpen[i].addEventListener('click', openModal);
//console.log('Button clicked');
//The above to confirm we are able to click buttons using JS.
//we are not changing the hidden content to show  up when we click on the button.
// modal.classList.remove('hidden');
// overlay.classList.remove('hidden');
//code for when we click on X button the modals should appear and backgorund blur should disappear
//   btnClose.addEventListener('click', function () {
//     modal.classList.add('hidden');
//     overlay.classList.add('hidden');
//   });
//   code for when we click on overlay(outside of content) the modals should appear and background blur should disappear
//   overlay.addEventListener('click', function () {
//     modal.classList.add('hidden');
//     overlay.classList.add('hidden');
//   });

//The the repeatation of same function in above we created a separate function and named close Modal.
//now we should not call closeModal() method. We want close modal to be exceuted only when click event happens so no method is used

btnClose.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);
