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

    const data = await res.json();

    return data;
  } catch (error) {
    throw Error(error);
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

    const data = await res.json();
    const { name, email } = data.data.user;

    return { name, email };
  } catch (error) {
    throw Error(error);
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

    const data = await res.json();

    return data;
  } catch (error) {
    throw Error(error);
  }
}

/*
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

    if (!res.ok) throw new Error('Failed to send an email!');

    const data = await res.json();

    return data;
  } catch (error) {
    throw Error(error);
  }
}

export async function resetPassword(resetPassword, resetToken) {
  try {
    const res = await fetch(
      `https://shopping-cart-pizzaria.vercel.app/api/v1/users/reset-password/${resetToken}`,
      {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(resetPassword),
      },
    );

    if (!res.ok) throw new Error('Failed to send a reset password!');

    const data = await res.json();

    return data;
  } catch (error) {
    throw Error(error);
  }
} */

export async function updateProfile(user) {
  const token = Cookies.get('token');
  if (!token) return '';

  try {
    const res = await fetch(
      `https://shopping-cart-pizzaria.vercel.app/api/v1/users/me/${token}`,
      {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
      },
    );

    if (!res.ok) throw new Error('Failed to send email!');

    const data = await res.json();

    return data;
  } catch (error) {
    throw Error(error);
  }
}

export async function updatePassword(pwd) {
  const token = Cookies.get('token');
  if (!token) return '';

  try {
    const res = await fetch(
      `https://shopping-cart-pizzaria.vercel.app/api/v1/users/update-my-password/${token}`,
      {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(pwd),
      },
    );

    if (!res.ok) throw new Error('Failed to send new password!');

    const data = await res.json();

    return data;
  } catch (error) {
    throw Error(error);
  }
}
