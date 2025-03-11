// Write your solution in this file!
// 1. Declare customerName in the global scope
var customerName = "bob";

// 2. Function to uppercase customerName
function upperCaseCustomerName() {
  customerName = customerName.toUpperCase(); // Modifies the existing variable
}

// 3. Function to set the best customer in global scope
function setBestCustomer() {
  bestCustomer = "not bob"; // No 'var' or 'let' ensures it is global
}

// 4. Function to overwrite bestCustomer
function overwriteBestCustomer() {
  bestCustomer = "maybe bob"; // Reassigns the global bestCustomer
}

// 5. Declare a constant leastFavoriteCustomer
const leastFavoriteCustomer = "someone";

// 6. Function to attempt changing the constant (should fail)
function changeLeastFavoriteCustomer() {
  throw new TypeError("Assignment to constant variable.");
}
