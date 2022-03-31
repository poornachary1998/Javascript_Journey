'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};
btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

// for (let i = 0; i < btnsOpenModal.length; i++)
//   btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

// selecting elements
console.log(document.documentElement);

console.log(document.head);

console.log(document.body);

// if you want to select the elements
const header = document.querySelector('.header');
console.log(header);
// the above will return the first element that matches the selector.

// For multiple elements

const sec = document.querySelectorAll('.section');
console.log(sec);
// select element by ID

const eid = document.getElementById('section-1');
console.log(eid);
const btn = document.getElementsByTagName('button');
console.log(btn);

// creating and inserting elements

// create element
const message = document.createElement('div');
console.log(message);
message.classList.add('cookie--message');
// <div class="cookie--message"></div>
message.textContent = 'We use cookies to improve the functionality';

// to insert a HTML
message.innerHTML =
  'We use cookies to improve the functionality <button class = "btn btn--close-cookie">Got it! </button>';
// header.append(message);
header.prepend(message);
header.append(message.cloneNode(true));

header.before(message);
document
  .querySelector('.btn--close-cookie')
  .addEventListener('click', function () {
    message.remove();
  });
