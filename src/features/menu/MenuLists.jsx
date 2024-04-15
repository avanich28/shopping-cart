import { useMenuLists } from './useMenuLists';
import { useSort } from '../../hooks/useSort';
import Spinner from '../../ui/Spinner';
import MenuItem from './MenuItem';
import Heading from '../../ui/Heading';
import MenuListsOperation from './MenuListsOperation';
import MenuPages from './MenuPages';
import Modal from '../../ui/Modal';
import ModalOpen from '../../ui/ModalOpen';

const NUM_LISTS = 5;

function MenuLists() {
  const {
    pages,
    handleMenuLists,
    isLoading,
    currentMenuLists,
    handleClickPage,
    menuLists: currentPage,
    totalItems,
  } = useMenuLists(NUM_LISTS);
  const { field, direction } = useSort();

  let sortData;
  if (field === 'name')
    sortData = currentMenuLists?.sort((a, b) => a.name.localeCompare(b.name));
  if (field === 'price')
    sortData = currentMenuLists?.sort((a, b) => a.unitPrice - b.unitPrice);
  if (direction === 'desc') sortData = sortData?.reverse();

  return (
    <div className="flex h-full flex-col gap-3 px-5 py-10">
      <div className="flex">
        <Heading type="primary">Menus</Heading>
        {!isLoading && (
          <MenuListsOperation sortData={sortData} totalItems={totalItems} />
        )}
      </div>

      <div className="divide-y border-y">
        <Modal>
          {isLoading ? (
            <Spinner />
          ) : (
            currentMenuLists?.map((pizza) => (
              <ModalOpen pizza={pizza} key={pizza.name}>
                <MenuItem pizza={pizza} type="secondary" imgGrey={true} />
              </ModalOpen>
            ))
          )}
        </Modal>
      </div>

      {pages > 1 && (
        <MenuPages
          pages={pages}
          isLoading={isLoading}
          currentPage={currentPage}
          onMenuLists={handleMenuLists}
          onClickPage={handleClickPage}
        />
      )}
    </div>
  );
}

export default MenuLists;
