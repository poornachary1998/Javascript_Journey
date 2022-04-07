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
header.append(message);
// header.prepend(message);
header.append(message.cloneNode(true));

// header.before(message);
document
  .querySelector('.btn--close-cookie')
  .addEventListener('click', function () {
    // message.remove();
  });

// style
message.style.backgroundColor = 'red';
message.style.width = '50%';
// for custom properties we need to use setproperty

document.documentElement.style.setProperty('--color-primary', 'orangered');
// attributes

// hover
const h1 = document.querySelector('h1');
const alerth1 = function (e) {
  alert('addEventListener: You are reading heading');

  h1.removeEventListener('mouseenter', alerth1);
};

// event propagation in practise

const randomInt = (max, min) =>
  Math.floor(Math.random() * (max - min + 1) + min);

const randomColor = () =>
  `rgb(${randomInt(0, 255)},${randomInt(0, 255)},${randomInt(0, 255)})`;

// we are adding rgb colour to elements in nav bar and for parent of elements
// .nav__links , .nav__link , .nav

document.querySelector('.nav__link').addEventListener('click', function (e) {
  this.style.backgroundColor = randomColor();
  console.log('Link', e.target, e.currentTarget);
  // this returns on which class we clicked and how target is moving in  DOM;
  // stop propagation
  // e.stopPropagation();
});
document.querySelector('.nav__links').addEventListener('click', function (e) {
  this.style.backgroundColor = randomColor();
  console.log('Link', e.target, e.currentTarget);
  // this returns on which class we clicked and how target is moving in  DOM
});
// if we click parent, child element does not change.
// if we click child element parent also changes

document.querySelector('.nav').addEventListener('click', function (e) {
  this.style.backgroundColor = randomColor();
  // if we click parent, child element does not change.
  // if we click child element parent also changes
  console.log('Link', e.target, e.currentTarget);
  // this returns on which class we clicked and how target is moving in  DOM
});
