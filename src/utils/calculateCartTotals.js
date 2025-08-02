export function calculateCartTotals(cart, orderType = 'delivery') {
  const subtotal = cart.reduce(
    (sum, item) => sum + (item?.menu?.price || 0) * (item.quantity || 0),
    0
  );

  const tax = subtotal * 0.08;
  const deliveryFee = orderType === 'delivery' ? (subtotal >= 25 ? 0 : 1) : 0;
  const total = subtotal + tax + deliveryFee;

  return {
    subtotal,
    tax,
    deliveryFee,
    total,
  };
}
