import { useEffect, useRef } from 'react';

export function useOutsideClick(handler, capturing = false) {
  const ref = useRef();

  useEffect(
    function () {
      function handleClick(e) {
        e.preventDefault();

        if (ref.current && !ref.current.contains(e.target)) handler();
      }

      document.addEventListener('click', handleClick, capturing);

      return () =>
        document.removeEventListener('click', handleClick, capturing);
    },
    [handler, capturing],
  );

  return { ref };
}
