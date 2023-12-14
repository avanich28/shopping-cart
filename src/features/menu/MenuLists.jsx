import { HiMiniChevronLeft } from 'react-icons/hi2';
import { HiMiniChevronRight } from 'react-icons/hi2';
import { useMenuLists } from './useMenuLists';
import Spinner from '../../ui/Spinner';
import { useSearch } from '../../contexts/searchContext';
import { useSort } from '../../hooks/useSort';
import MenuItem from './MenuItem';
import Button from '../../ui/Button';
import SortBy from '../../ui/SortBy';

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
  const { updateQuery } = useSearch();
  const { field, direction } = useSort();

  let sortData;
  if (field === 'name')
    sortData = currentMenuLists?.sort((a, b) => a.name.localeCompare(b.name));
  if (field === 'price')
    sortData = currentMenuLists?.sort((a, b) => a.unitPrice - b.unitPrice);
  if (direction === 'desc') sortData = sortData?.reverse();

  return (
    <div className="flex flex-col items-center justify-center gap-3 px-3 py-10">
      <h3 className="text-2xl font-bold uppercase tracking-widest text-red-700">
        Menus
      </h3>

      <div className="flex flex-wrap justify-center gap-3">
        <div className="flex w-full justify-center gap-10">
          <p>
            {updateQuery
              ? `Showing results for: ${updateQuery} (${sortData?.length})`
              : `${sortData?.length} items`}
          </p>
          <SortBy
            id="defaultSort"
            options={[
              { value: 'name-asc', label: 'name (A-Z)' },
              { value: 'name-desc', label: 'name (Z-A)' },
              { value: 'price-asc', label: 'price (low first)' },
              { value: 'price-desc', label: 'price (high first)' },
            ]}
          />
        </div>
        {isLoading ? (
          <Spinner />
        ) : (
          currentMenuLists?.map((pizza) => (
            <MenuItem pizza={pizza} key={pizza.name} type="secondary" />
          ))
        )}
      </div>

      {pages > 1 && (
        <div className="mt-10 flex gap-3 [&>*]:transition-all">
          <Button
            onClick={() => handleMenuLists('left', false)}
            type="secondary"
          >
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
                    ? 'rounded-full bg-amber-300 text-white hover:text-white'
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
      )}
    </div>
  );
}

export default MenuLists;
