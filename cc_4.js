// Task 1: If Statements - Customer Discounts
let purchaseAmount = 120;
if (purchaseAmount > 100) {
    let discount = purchaseAmount * 0.1;
    purchaseAmount -= discount;
}
console.log(`Final amount after discount: $${purchaseAmount.toFixed(2)}`);

// Task 2: For Loop - Sales Report
let sales = [120, 85, 200, 150, 90];
let totalSales = 0;
for (let i = 0; i < sales.length; i++) {
    totalSales += sales[i];
}
console.log(`Total Sales: $${totalSales}`);

// Task 3: While Loop - Inventory Depletion
let stock = 10;
while (stock > 0) {
    console.log(`Stock remaining: ${stock}`);
    stock--;
}

// Task 4: Do...While Loop - Customer Survey
let responses = 0;
do {
    console.log(`Response count: ${responses}`);
    responses++;
} while (responses < 3);

// Task 5: For...In Loop - Employee Information
let employee = { name: "Jenny", position: "Manager", salary: 75000 };
for (let key in employee) {
    console.log(`${key}: ${employee[key]}`);
}

// Task 6: For...Of Loop - Product Listings
let products = ["Laptop", "Mouse", "Keyboard"];
for (let product of products) {
    console.log(`Product: ${product}`);
}

// Task 7: forEach() Method - Order Processing
let orders = [101, 102, 103];
orders.forEach(order => console.log(`Order ID: ${order}`));

// Task 8: Function Declaration - Tax Calculation
function calculateTax(amount, taxRate) {
    return amount * taxRate;
}
console.log(`Calculated Tax: $${calculateTax(200, 0.08)}`);

// Task 9: Function Expression - Discount Application
const applyDiscount = function(price, discountPercentage) {
    return price - (price * (discountPercentage / 100));
};
console.log(`Discounted Price: $${applyDiscount(100, 10)}`);

// Task 10: Arrow Functions - Loyalty Points
const calculatePoints = purchaseAmount => Math.floor(purchaseAmount / 10);
console.log(`Loyalty Points Earned: ${calculatePoints(150)}`);
