// You need to implement the ShoppingCart constructor function and its prototype methods

function ShoppingCart(items) {
    // Initialize items property
    this.items = items || [];
}

// Define addItem method on ShoppingCart's prototype
ShoppingCart.prototype.addItem = function(price){
  this.items.push(price);
  return this.items;
}

// Define getTotalPrice method on ShoppingCart's prototype

ShoppingCart.prototype.getTotalPrice = function(){
  const total = this.items.reduce((acc, curr)=> acc + curr, 0);
  return total;
}
// Please don't remove the code below
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on('line', (input) => {
  const { prices } = JSON.parse(input);
  const cart = new ShoppingCart();

  for (let price of prices) {
    cart.addItem(price);
  }

  process.stdout.write(JSON.stringify(cart.getTotalPrice()));
});
