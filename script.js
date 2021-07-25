// write a basic ATM console/gui application.
/**
 * 
 let accountBalance = +prompt(`Amount to deposit`);
 let charges = 100;
 
 // set to local storage
 let balance = localStorage.setItem('key', accountBalance);
 
 const ATM = () => {
     let cashOut = +prompt(`Amount to withdraw`);
     if(cashOut < accountBalance){
         
     let currBalance = accountBalance - (cashOut + charges);
 
     confirm(`Confirm the withdrawal of ${cashOut}`)
     return alert(`Your transaction was successfull.
 Current account balance: ${currBalance}FCFA`);
 
     } else {
         return alert(`Sorry your account balance is not enough`);
     }
 }
 
 console.log(ATM());
 */


let modal = document.querySelector('.overlay');
let close = document.querySelector('.close');
let depositBtn = document.querySelector('.depo-btn');
let depositForm = document.querySelector('.deposit-modal');
let withdrawBtn = document.querySelector('.withdraw-btn');
let withdrawForm = document.querySelector('.withdraw-modal');
let username = document.getElementById('username');
let initialAmount = document.getElementById('initialAmount');
let pin = document.getElementById('pin');
let registerSubmit = document.querySelector('#registerSubmit');

// getting the values from the registration form
registerSubmit.addEventListener('click', (event) => {
    event.preventDefault();
    console.log(username.value, Number(initialAmount.value), pin.value);
    event.reset();
})

// trigger modal
const showModal = () => {
    modal.style.visibility = 'visible';
}

// close modal/form via close btn
close.addEventListener('click', ()=>{
        modal.style.visibility = 'hidden'
    }
)

// trigger deposit form
    depositBtn.addEventListener('click', ()=>{
        depositForm.style.visibility = 'visible';
        withdrawForm.style.visibility = 'hidden';
    })

// trigger withdrawal form
    withdrawBtn.addEventListener('click', ()=>{
        withdrawForm.style.visibility = 'visible';
        withdrawForm.style.transform = 'translateY(-190px)';
        depositForm.style.visibility = 'hidden';
    })