const { getAllProducts, searchProducts } = require("./product.js");
const {
  addToCart,
  getCartItems,
  getCartTotal,
  updateQuantity,
  removeFromCart
} = require("./cart.js");
const { processPayment } = require("./payment.js");

console.log("=== E-Commerce Store ===");

console.log("\nAll Products:");
console.log(getAllProducts());

console.log("\nSearch 'phone':");
console.log(searchProducts("phone"));

console.log(addToCart(1, 2));
console.log(addToCart(3, 3));
console.log(addToCart(1, 1));

console.log("\nCart:");
console.log(getCartItems());
console.log("Total:", getCartTotal());

console.log(updateQuantity(1, 2));
console.log(removeFromCart(3));

console.log("\nCheckout:");
console.log(processPayment("upi", "WELCOME10"));
