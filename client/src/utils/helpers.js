export function formatCurrency(number, currency = 'THB') {
  const newNumber = new Intl.NumberFormat('th-TH', {
    style: 'currency',
    currency: currency,
    maximumFractionDigits: 0,
  }).format(number);

  return newNumber;
}
