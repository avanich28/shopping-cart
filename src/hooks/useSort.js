import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

export function useSort(initial = ['name', 'asc']) {
  const [searchParams] = useSearchParams();
  const [currentSort, setCurrentSort] = useState([]);
  const [field, direction] = searchParams.get('sortBy')?.split('-') || initial;

  useEffect(
    function () {
      setCurrentSort({ field, direction });
    },
    [field, direction],
  );

  return currentSort;
}
