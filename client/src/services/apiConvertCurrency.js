export async function convertCurrency(amount, currency) {
  try {
    const res = await fetch(
      `https://api.frankfurter.app/latest?amount=${amount}&from=EUR&to=${currency}`,
    );
    const data = await res.json();

    return data;
  } catch (err) {
    console.error(err);
  }
}
