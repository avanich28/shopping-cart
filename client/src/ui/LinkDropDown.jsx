import { HiOutlineMenu } from 'react-icons/hi';
import Button from './Button';
import { useState } from 'react';
import { links } from '../utils/links';
import LinkButton from './LinkButton';
import { useOutsideClick } from '../hooks/useOutsideClick';

function LinkDropDown() {
  const [isOpen, setIsOpen] = useState(false);
  const { ref } = useOutsideClick(() => setIsOpen(false));

  function toggleLinkDropDown() {
    console.log('hello');
    setIsOpen((is) => !is);
  }
  // console.log(isOpen);

  return (
    <>
      <div ref={ref} className="flex lg:hidden">
        <Button
          btnType="button"
          onClick={toggleLinkDropDown}
          className="rounded-md bg-stone-900 p-[8px] text-lg text-amber-50"
        >
          <HiOutlineMenu />
        </Button>
      </div>

      {isOpen && (
        <div className="absolute top-[53px] flex w-[130px] flex-col gap-4 rounded-md border border-stone-400 bg-stone-900 p-[8px]">
          {links.map((link) => (
            <LinkButton
              key={link.to}
              to={link.to}
              className="text-xs text-amber-50 hover:text-amber-400"
            >
              {link.label}
            </LinkButton>
          ))}
        </div>
      )}
    </>
  );
}

export default LinkDropDown;
