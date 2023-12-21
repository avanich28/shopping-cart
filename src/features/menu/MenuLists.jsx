import { useMenuLists } from './useMenuLists';
import { useSort } from '../../hooks/useSort';
import Spinner from '../../ui/Spinner';
import MenuItem from './MenuItem';
import Heading from '../../ui/Heading';
import MenuListsOperation from './MenuListsOperation';
import MenuPages from './MenuPages';
import Modal from '../../ui/Modal';
import ModalOpen from '../../ui/ModalOpen';

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
  const { field, direction } = useSort();

  let sortData;
  if (field === 'name')
    sortData = currentMenuLists?.sort((a, b) => a.name.localeCompare(b.name));
  if (field === 'price')
    sortData = currentMenuLists?.sort((a, b) => a.unitPrice - b.unitPrice);
  if (direction === 'desc') sortData = sortData?.reverse();

  return (
    <div className="flex h-full flex-col items-center gap-3 px-3 py-10">
      <Heading type="primary">Menus</Heading>

      <Modal>
        <div className="flex h-full flex-wrap items-center justify-center gap-3">
          {!isLoading && <MenuListsOperation sortData={sortData} />}

          {isLoading ? (
            <Spinner />
          ) : (
            currentMenuLists?.map((pizza) => (
              <ModalOpen pizza={pizza} key={pizza.name}>
                <MenuItem pizza={pizza} type="secondary" imgGrey={true} />
              </ModalOpen>
            ))
          )}
        </div>
      </Modal>

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
