import { useSearch } from '../../contexts/searchContext';
import SortBy from '../../ui/SortBy';

function MenuListsOperation({ sortData }) {
  const { updateQuery } = useSearch();

  return (
    <div className="flex w-full justify-center gap-10 font-semibold uppercase">
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
        type="primary"
      />
    </div>
  );
}

export default MenuListsOperation;
