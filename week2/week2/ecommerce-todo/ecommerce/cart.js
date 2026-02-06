const { getProductById, checkStock } = require("./product.js");

let cartItems = [];

function addToCart(productId, quantity) {
  const product = getProductById(productId);
  if (!product) return "Product not found";
  if (!checkStock(productId, quantity)) return "Insufficient stock";

  const item = cartItems.find(i => i.productId === productId);
  if (item) item.quantity += quantity;
  else cartItems.push({ productId, quantity });

  return "Item added to cart";
}

function removeFromCart(productId) {
  cartItems = cartItems.filter(i => i.productId !== productId);
  return "Item removed from cart";
}

function updateQuantity(productId, newQuantity) {
  if (!checkStock(productId, newQuantity)) return "Insufficient stock";
  const item = cartItems.find(i => i.productId === productId);
  if (!item) return "Item not found";

  item.quantity = newQuantity;
  return "Quantity updated";
}

function getCartItems() {
  return cartItems.map(i => {
    const p = getProductById(i.productId);
    return { ...p, quantity: i.quantity };
  });
}

function getCartTotal() {
  return getCartItems().reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
}

function clearCart() {
  cartItems = [];
}

module.exports = {
  addToCart,
  removeFromCart,
  updateQuantity,
  getCartItems,
  getCartTotal,
  clearCart
};
