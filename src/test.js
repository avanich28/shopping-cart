async function test() {
  try {
    const res = await fetch(
      'https://react-fast-pizza-api.onrender.com/api/menu',
    );

    if (!res.ok) throw new Error('Failed to get pizza menus');

    const data = await res.json();
    console.log(data.data);
    return data.data;
  } catch (err) {
    console.error(err);
  }
}
test();

export { test };
