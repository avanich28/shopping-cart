import { useCallback, useEffect, useState } from 'react';

import platePizza from '../../assets/images/home/plate-pizza.png';
import sanMacro from '../../assets/images/home/san-macro.png';
import happyFacePizza from '../../assets/images/home/happy-face-pizza.png';

export const headerContents = [
  {
    id: 0,
    title: 'Welcome to Napopizza',
    detail: 'The hottest pizza in town!',
    image: platePizza,
    alt: 'Plate Pizza',
  },
  {
    id: 1,
    title: 'Slice into happiness with our authentic Italian pizza',
    detail: 'We will take you to experience the true taste of Italy.',
    image: sanMacro,
    alt: 'San Macro',
  },
  {
    id: 2,
    title: 'Create your New Pizza Menu',
    detail: 'The winner will get a free pizza!',
    image: happyFacePizza,
    alt: 'Happy Face Pizza',
  },
];

const SEC = 5;

export function useHeaderContents() {
  const [currentContent, setCurrentContent] = useState(headerContents[0]);

  const handleCurrentContent = useCallback(
    function handleCurrentContent(id) {
      if (id === currentContent.id) return;
      if (id < 0) id = 2;
      if (id >= headerContents.length) id = 0;
      setCurrentContent(headerContents[id]);
    },
    [currentContent],
  );

  useEffect(
    function () {
      const timer = setInterval(() => {
        handleCurrentContent(
          currentContent.id >= headerContents.length
            ? 0
            : currentContent.id + 1,
        );
      }, 1000 * SEC);

      return () => clearInterval(timer);
    },
    [handleCurrentContent, currentContent],
  );

  return {
    currentContent,
    handleCurrentContent,
  };
}
