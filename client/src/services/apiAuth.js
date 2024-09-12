import Cookies from 'js-cookie';

export async function login(user) {
  try {
    const res = await fetch(
      'https://shopping-cart-pizzaria.vercel.app/api/v1/users/log-in',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
      },
    );

    if (!res.ok) throw new Error('Failed to log in!');

    const data = res.json();

    return data;
  } catch (error) {
    console.error(error); // TODO
  }
}

export async function getCurrentUser() {
  try {
    const token = Cookies.get('token');
    if (!token) return '';

    const res = await fetch(
      `https://shopping-cart-pizzaria.vercel.app/api/v1/users/current-user/${token}`,
    );

    if (!res.ok) throw new Error('Failed to get user!');

    const data = res.json();

    return data;
  } catch (error) {
    console.error(error); // TODO
  }
}

export async function signup(user) {
  try {
    const res = await fetch(
      'https://shopping-cart-pizzaria.vercel.app/api/v1/users/sign-up',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
      },
    );

    if (!res.ok) throw new Error('Failed to signup!');

    const data = res.json();

    return data;
  } catch (error) {
    console.error(error); // TODO
  }
}

export async function forgetPassword(email) {
  try {
    const res = await fetch(
      'https://shopping-cart-pizzaria.vercel.app/api/v1/users/forget-password',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(email),
      },
    );

    if (!res.ok) throw new Error('Failed to send email!');

    const data = res.json();

    return data;
  } catch (error) {
    console.error(error); // TODO
  }
}
