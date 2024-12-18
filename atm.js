let pinEntered = '';
let correctPin = '1234';  // Example correct PIN
let checkingBalance = 1000.00;
let savingsBalance = 2000.00;
let currentAccount = 'checking'; // Default account is checking

// When card is inserted
function insertCard() {
  document.getElementById('mainDisplay').innerText = 'Please Enter PIN';
}

// When a key is pressed
function enterNumber(num) {
  pinEntered += num;
  document.getElementById('mainDisplay').innerText = pinEntered;
}

// Clear the entered PIN
function clearEntry() {
  pinEntered = '';
  document.getElementById('mainDisplay').innerText = 'PIN Cleared';
}

// Submit the entered PIN
function submitPIN() {
  if (pinEntered === correctPin) {
    document.getElementById('mainDisplay').innerText = 'PIN Correct';
    document.getElementById('accountDisplay').innerText = 'Choose an option';
    document.getElementById('checkingBalance').innerText = checkingBalance.toFixed(2);
    document.getElementById('savingsBalance').innerText = savingsBalance.toFixed(2);
  } else {
    document.getElementById('mainDisplay').innerText = 'Incorrect PIN';
    setTimeout(() => {
      pinEntered = '';
      document.getElementById('mainDisplay').innerText = 'Please Enter PIN';
    }, 1500);
  }
}

// Start Deposit process
function startDeposit() {
  document.getElementById('mainDisplay').innerText = 'Enter Deposit Amount';
  // Switch to deposit mode
  currentAccount = prompt("Enter the account (checking/savings):").toLowerCase();
}

// Start Withdraw process
function startWithdraw() {
  document.getElementById('mainDisplay').innerText = 'Enter Withdrawal Amount';
  // Switch to withdraw mode
  currentAccount = prompt("Enter the account (checking/savings):").toLowerCase();
}

// Check account balance
function checkBalance() {
  let balance = currentAccount === 'checking' ? checkingBalance : savingsBalance;
  document.getElementById('mainDisplay').innerText = 'Balance: $' + balance.toFixed(2);
}

