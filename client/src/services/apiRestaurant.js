import Cookies from 'js-cookie';

export async function getMenus() {
  try {
    const res = await fetch(
      'https://shopping-cart-pizzaria.vercel.app/api/v1/menu',
    );

    if (!res.ok) throw new Error('Failed to get pizza menus');

    const data = await res.json();

    return data.data; // []
  } catch (error) {
    throw Error(error);
  }
}

export async function createDelivery(order) {
  try {
    const token = Cookies.get('token');
    if (!token) return '';

    const res = await fetch(
      `https://shopping-cart-pizzaria.vercel.app/api/v1/users/delivery/${token}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(order),
      },
    );

    if (!res.ok) throw new Error('Failed to create order');

    const data = await res.json();

    return data;
  } catch (error) {
    throw Error(error);
  }
}

export async function getAllDeliveries() {
  try {
    const token = Cookies.get('token');
    if (!token) return {};

    const res = await fetch(
      `https://shopping-cart-pizzaria.vercel.app/api/v1/users/delivery/${token}`,
    );

    if (!res.ok) throw new Error('Failed to get deliveries');

    const data = await res.json();

    return data;
  } catch (error) {
    throw Error(error);
  }
}
