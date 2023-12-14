import { useEffect, useState } from 'react';
import { convertCurrency } from '../services/apiConvertCurrency';

export function useConvertCurrency(unitPrice, currency) {
  const [newAmount, setNewAmount] = useState(null);

  useEffect(
    function () {
      async function handleConvertCurrency() {
        const data = await convertCurrency(unitPrice, currency);
        setNewAmount(Math.trunc(data.rates[currency]));
      }

      handleConvertCurrency();
    },
    [unitPrice, currency],
  );

  return newAmount;
}
