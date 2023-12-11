import { HiMiniChevronLeft } from 'react-icons/hi2';
import { HiMiniChevronRight } from 'react-icons/hi2';
import MenuItem from './MenuItem';
import Button from '../../ui/Button';
import { useMenuLists } from './useMenuLists';
import Spinner from '../../ui/Spinner';

const NUM_LISTS = 10;

function MenuLists() {
  const {
    pages,
    handleMenuLists,
    isLoading,
    currentMenuLists,
    handleClickPage,
    menuLists: currentPage,
  } = useMenuLists(NUM_LISTS);

  return (
    <div className="flex flex-col items-center gap-3 p-10">
      <h3 className="text-2xl font-bold uppercase tracking-widest text-red-700">
        Menus
      </h3>
      <div className="flex flex-wrap justify-center gap-3 gap-x-5">
        {isLoading ? (
          <Spinner />
        ) : (
          currentMenuLists?.map((pizza) => (
            <MenuItem pizza={pizza} key={pizza.name} type="secondary" />
          ))
        )}
      </div>
      <div className="mt-10 flex gap-3 [&>*]:transition-all">
        <Button onClick={() => handleMenuLists('left', false)} type="secondary">
          <HiMiniChevronLeft />
        </Button>
        {!isLoading &&
          new Array(pages).fill('')?.map((_, i) => (
            <Button
              key={i}
              type="secondary"
              onClick={() => handleClickPage(i)}
              className={`
                ${
                  currentPage === i
                    ? 'rounded-full bg-amber-300 text-white'
                    : ''
                } h-8 w-8`}
            >
              {i + 1}
            </Button>
          ))}
        <Button
          onClick={() => handleMenuLists('right', false)}
          type="secondary"
        >
          <HiMiniChevronRight />
        </Button>
      </div>
    </div>
  );
}

export default MenuLists;
