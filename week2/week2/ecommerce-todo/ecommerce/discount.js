const coupons = {
  WELCOME10: { type: "percentage", value: 10, minAmount: 1000 },
  FLAT500: { type: "flat", value: 500, minAmount: 5000 }
};

function validateCoupon(code, total) {
  const coupon = coupons[code];
  if (!coupon) return { valid: false, message: "Invalid coupon" };
  if (total < coupon.minAmount)
    return { valid: false, message: "Minimum amount not met" };

  return { valid: true, message: "Coupon applied" };
}

function calculateDiscount(code, total) {
  const c = coupons[code];
  return c.type === "percentage" ? (total * c.value) / 100 : c.value;
}

function applyDiscount(total, code) {
  const validation = validateCoupon(code, total);
  if (!validation.valid) {
    return { originalTotal: total, discount: 0, finalTotal: total };
  }

  const discount = calculateDiscount(code, total);
  return {
    originalTotal: total,
    discount,
    finalTotal: total - discount
  };
}

module.exports = {
  applyDiscount
};
