export function calculateCartTotals(cart) {
  const subtotal = cart.reduce(
    (sum, item) => sum + (item?.menu?.price || 0) * (item.quantity || 0),
    0
  );

  const tax = subtotal * 0.08;
  const deliveryFee = subtotal >= 25 ? 0 : 1;
  const total = subtotal + tax + deliveryFee;

  return {
    subtotal,
    tax,
    deliveryFee,
    total,
  };
}
