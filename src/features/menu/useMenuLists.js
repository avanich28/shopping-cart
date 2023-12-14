import { useState } from 'react';
import { useMenus } from './useMenus';
import { useSearch } from '../../contexts/searchContext';

export function useMenuLists(NUM_LISTS, reuse = true) {
  const { data, isLoading } = useMenus();
  const [menuLists, setMenuLists] = useState(0);
  const [side, setSide] = useState('');
  const { updateQuery } = useSearch();

  const filterData = updateQuery
    ? data.filter((pizza) => pizza.name.toLowerCase().includes(updateQuery))
    : data;

  const max = Math.ceil(filterData?.length / NUM_LISTS) - 1;
  const start = menuLists * NUM_LISTS;
  const end = start + NUM_LISTS;
  const currentMenuLists = filterData?.slice(start, end);

  function handleMenuLists(direction = '') {
    if (direction === 'left')
      setMenuLists((num) => (num - 1 < 0 ? (!reuse ? max : num) : num - 1));
    if (direction === 'right')
      setMenuLists((num) => (num + 1 > max ? (!reuse ? 0 : num) : num + 1));
    setSide(direction);
  }

  function handleClickPage(page) {
    if (menuLists === page) return;
    setMenuLists(page);
  }

  return {
    pages: max + 1,
    handleMenuLists,
    side,
    isLoading,
    currentMenuLists,
    handleClickPage,
    menuLists,
  };
}
