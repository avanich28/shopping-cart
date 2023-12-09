import { useState } from 'react';

export function useMenuLists(max) {
  const [menuLists, setMenuLists] = useState(0);
  const [side, setSide] = useState('');
  const start = menuLists * 3;
  const end = start + 3;

  function handleMenuLists(direction = '') {
    if (direction === 'left')
      setMenuLists((num) => (num - 1 < 0 ? max : num - 1));
    if (direction === 'right')
      setMenuLists((num) => (num + 1 > max ? 0 : num + 1));
    setSide(direction);
  }

  return { start, end, handleMenuLists, side };
}
