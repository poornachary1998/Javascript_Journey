'use strict';

// BANKIST APP

// Data
const account1 = {
  owner: 'Poorna Chary',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Rohith Kumar',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Charan Singh',
  movements: [200, -200, 340, -300, 5000, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Nithish Bharadwaj',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');


const dispalyMovements = function(movements, sort = false){

  containerMovements.innerHTML = '';
// sort ? means if sort is true then
// : means else  // 
const movs = sort ? movements.slice().sort((a,b) => a-b): movements;

  // .textContent = 0;
  // defaulr data is removed by innerHTML
  movs.forEach(function (mov,i){

    const type = mov>0 ? 'deposit':'withdrawal';

    const html = `
    <div class="movements__row">
    <div class="movements__type movements__type--${type}">${i+1} ${type}</div>
    <div class="movements__value">${mov}€</div>
    `;
    

  // for adding the new movements row in container we use insertAdjacentHTML()
containerMovements.insertAdjacentHTML('afterbegin', html)
// if we use the beforeend then the elements are reversed
  });
};

const displayLabelBalance  =  function(acc){
  acc.balance = acc.movements
  .reduce((acc,mov)=>acc+mov,0);
  // acc.balance = balance;
  labelBalance.textContent = `${acc.balance} EUR`
}

const calcDisplaySummary = function(acc)
{
  const incomes = acc.movements
  .filter(mov => mov>0)
  .reduce((acc,mov) => acc + mov ,0);
  labelSumIn.textContent = `${incomes}€`;


const outcomes = acc.movements
.filter(mov => mov<0)
.reduce((acc,mov) => acc+ mov,0)
labelSumOut.textContent = `${Math.abs(outcomes)}€`;


const intrest = acc.movements
.filter(mov => mov>0)
.map(deposit => deposit * acc.interestRate /100)
// now if bank applies a rule it pays only intest only if intrest is more than 1 Euro
.filter((int,i, arr)=>{
  // console.log(arr);
  return int>=1;
})
.reduce((acc, int)=> acc+int,0)
// intrest can be done for deposits , now we need to store all the deposits in an array
// Each deposits should ocntain 1.2 percent intrest so we use map function
labelSumInterest.textContent = `${intrest}€`;

};


const createUserName = function (accs){
  accs.forEach(function (acc){
  acc.username =  acc.owner.toLowerCase().split(' ').map(name => name[0]).join('');
  });
};
createUserName(accounts);
// Update UI - after making transfers the movements and summary and current balance should show the correct amount
const updateUI = function(acc){

// Display Movements
dispalyMovements(acc.movements);
  // Display Balance
displayLabelBalance(acc)
  // Display summary
calcDisplaySummary(acc);

}

// Event handlers
let currentAccount;

btnLogin.addEventListener('click', function (e){
// prevent form submitting when clicked / pressed enter key
  e.preventDefault();

  currentAccount = accounts.find(acc => acc.username === inputLoginUsername.value);
  console.log(currentAccount);

  if(currentAccount?.pin === Number(inputLoginPin.value))
{
  // Display UI and message
labelWelcome.textContent = `Welcome back, ${currentAccount.owner}`
containerApp.style.opacity = 100;
// clear fields
inputLoginUsername.value = inputLoginPin.value = '';
// assignment works from right to left, The above line to clear credential after login

inputLoginPin.blur();
// update UI for current account
updateUI(currentAccount);

}
});
// Transferring money
btnTransfer.addEventListener('click', function(e){
  e.preventDefault();

  const amount = Number(inputTransferAmount.value);
  // To check if the transfer account is an existing account in the app or not we use find method which will check the username for which we are transferring amount is an existing one or not

  const receiverAccount = accounts.find(acc => acc.username === inputTransferTo.value);
console.log(amount, receiverAccount);

// cleanout inputs
inputTransferAmount.value = inputTransferTo.value = '';

// checking the amount to transfer is a positive number or not
// check if the reciever account is existing or not, we are using receiveraccount and  optional chaining for that
// also current account balance should be minimum of sending amount 
// also we should not transfer the money to our own account


if(amount>0 && receiverAccount&& currentAccount.balance >= amount && receiverAccount?.username !== currentAccount.username){
// console.log(`Transfer valid`);


// We need to add negative movement for sender and positive movement for money receiver

currentAccount.movements.push(-amount);
receiverAccount.movements.push(amount);

// update UI for current account
updateUI(currentAccount);
}
})

 btnLoan.addEventListener('click',function(e){
   e.preventDefault();

   const amount = Number(inputLoanAmount.value);
// condition the amount for load request should be >0 and there should be transaction should be greater than 10% of deposit amount
   if(amount>0 && currentAccount.movements.some(mov => mov >= amount / 100)){

    // Add movement to current data

    currentAccount.movements.push(amount);

    // update UI
    updateUI(currentAccount);

   }
   inputLoanAmount.value = ''; 
 })

// close account
btnClose.addEventListener('click',function(e){
  e.preventDefault();

  if(currentAccount.username === inputCloseUsername.value && currentAccount.pin === Number(inputClosePin.value) ){

let index = accounts.findIndex(acc => acc.username === currentAccount.username)
  // Delete account
accounts.splice(index,1);
  // Hide UI / logout
  containerApp.style.opacity = 0;
  // clear fields after logout

  }
// clear fields
  inputCloseUsername.value = inputClosePin.value = '';

})
// preserving the original movement so that if we click on the sort button twice we need to get the origial movements
let sorted = false;

// Now when the user clicks the sort button ,we need to callback function-
// - sort is set to true and arranges from small to large movements

btnSort.addEventListener('click', function(e){
  e.preventDefault();
// dispalyMovements(currentAccount.movements ,  true);
dispalyMovements(currentAccount.movements ,  !sorted);
// true>> then it sorts the movements
sorted = !sorted;
// now the new value of sorted is TRUE
})
