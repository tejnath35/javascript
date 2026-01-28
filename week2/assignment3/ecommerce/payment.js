const { reduceStock } = require("./product.js");
const { getCartItems, getCartTotal, clearCart } = require("./cart.js");
const { applyDiscount } = require("./discount.js");

function validatePaymentMethod(method) {
  return ["card", "upi", "cod"].includes(method);
}

function processPayment(method, couponCode = null) {
  if (!validatePaymentMethod(method)) {
    return { status: "failed", message: "Invalid payment method" };
  }

  const items = getCartItems();
  const subtotal = getCartTotal();
  const discountData = couponCode
    ? applyDiscount(subtotal, couponCode)
    : { discount: 0, finalTotal: subtotal };

  items.forEach(i => reduceStock(i.id, i.quantity));
  clearCart();

  return {
    orderId: "ORD" + Date.now(),
    items,
    subtotal,
    discount: discountData.discount,
    total: discountData.finalTotal,
    paymentMethod: method,
    status: "success"
  };
}

module.exports = {
  processPayment
};
