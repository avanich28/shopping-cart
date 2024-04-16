import { useSearch } from '../../contexts/searchContext';
import SortBy from '../../ui/SortBy';

function MenuListsOperation({ sortData, totalItems }) {
  const { updateQuery } = useSearch();

  return (
    <div className="ml-auto flex items-center gap-2 text-sm">
      <p>
        {updateQuery
          ? `Showing results for: ${updateQuery} (${sortData?.length} items)`
          : `(${totalItems} items)`}
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
