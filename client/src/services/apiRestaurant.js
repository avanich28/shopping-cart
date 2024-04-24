export async function getMenus() {
  const res = await fetch('https://react-fast-pizza-api.onrender.com/api/menu');

  if (!res.ok) throw new Error('Failed to get pizza menus');

  const data = await res.json();

  return data.data;
}
