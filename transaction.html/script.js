const userPIN = "1234";
const creditCardPIN = "1234";
const debitCardPIN = "1234";

function showUserDetails() {
  const pin = prompt("Enter 4-digit PIN to view User Details");
  if (pin === userPIN) {
    document.getElementById("details").innerHTML = `
            <h2>User Details</h2>
            <p>Name: John Doe</p>
            <p>Email: johndoe@example.com</p> 
            <p>Phone: 123-456-7890</p>
        `;
    document.getElementById("details").style.display = "block";
  } else {
    alert("Incorrect PIN!");
  }
}

function showCreditCardDetails() {
  const pin = prompt("Enter 4-digit PIN to view Credit Card Details");
  if (pin === creditCardPIN) {
    document.getElementById("details").innerHTML = `
            <h2>Credit Card Details</h2>
            <p>Card Number: 1234-5678-9012-3456</p>
            <p>Expiry Date: 12/25</p>
            <p>Holder Name: John Doe</p>
            <button onclick="checkBalance()">Check Balance</button>
            <button onclick="addPIN()">Add PIN</button>
        `;
    document.getElementById("details").style.display = "block";
  } else {
    alert("Incorrect PIN!");
  }
}

function CreditCardDetails() {
  const amount = prompt("Enter the amount to credit:");
  const parsedAmount = parseFloat(amount);

  if (isNaN(parsedAmount) || parsedAmount <= 0) {
    alert("Please enter a valid amount.");
  } else {
    alert(
      "Amount credited: ₹" +
        parsedAmount.toLocaleString("en-IN", {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
        })
    );
  }
}

function checkBalance() {
  alert("Your balance is $5,000");
}

function addPIN() {
  const newPIN = prompt("Enter new 4-digit PIN");
  if (newPIN && newPIN.length === 4 && !isNaN(newPIN)) {
    alert("PIN updated successfully!");
  } else {
    alert("Invalid PIN. Please enter a valid 4-digit number.");
  }
}

function showDebitCardDetails() {
  const pin = prompt("Enter 4-digit PIN to view Debit Card Details");
  if (pin === debitCardPIN) {
    document.getElementById("details").innerHTML = `
            <h2>Debit Card Details</h2>
            <p>Card Number: 1234-5678-9012-3456</p>
            <p>Expiry Date: 12/25</p>
            <p>Holder Name: John Doe</p>
            <button onclick="checkBalance()">Check Balance</button>
            <button onclick="addPIN()">Add PIN</button>
        `;
    document.getElementById("details").style.display = "block";
  } else {
    alert("Incorrect PIN!");
  }
}
function goHome() {
  document.getElementById("details").style.display = "none";
  document.getElementById("details").innerHTML = "";
}

function debitAmount() {
  const amount = prompt("Enter the amount to debit:");
  const parsedAmount = parseFloat(amount);

  if (isNaN(parsedAmount) || parsedAmount <= 0) {
    alert("Please enter a valid amount.");
  } else {
    alert(
      "Amount debited: ₹" +
        parsedAmount.toLocaleString("en-IN", {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
        })
    );
  }
}
