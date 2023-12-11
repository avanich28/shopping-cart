export function formatCurrency(number, currency = 'THB') {
  const newNumber = new Intl.NumberFormat('th-TH', {
    style: 'currency',
    currency: currency,
  }).format(number);

  return newNumber;
}
