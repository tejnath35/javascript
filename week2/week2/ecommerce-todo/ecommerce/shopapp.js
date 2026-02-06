const { getAllProducts, searchProducts } = require("./product.js");
const { addToCart, getCartItems, getCartTotal } = require("./cart.js");
const { processPayment } = require("./payment.js");

console.log("=== SHOP APP ===");

console.log(getAllProducts());
console.log(searchProducts("phone"));

console.log(addToCart(1, 2));
console.log(addToCart(3, 1));

console.log(getCartItems());
console.log("Total:", getCartTotal());

console.log(processPayment());
