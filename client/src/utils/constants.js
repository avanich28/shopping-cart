export const DELIVERY_CHARGE = 20;
export const TAX = 0.07;

export function calcTax(totalPrices) {
  return Number((TAX * totalPrices).toFixed(2));
}
