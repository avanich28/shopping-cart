import { useSearchParams } from 'react-router-dom';

function SortBy({ id, options }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const sortBy = searchParams.get('sortBy') || options[0].value;

  function handleChange(e) {
    searchParams.set('sortBy', e.target.value);
    setSearchParams(searchParams);
  }

  return (
    <div className="flex gap-2">
      <label htmlFor={id}>Sort By</label>
      <select
        id={id}
        className="border-2 border-amber-200 focus:border-amber-300 focus:outline-none"
        onChange={handleChange}
        value={sortBy}
      >
        {options.map((option) => (
          <option value={option.value} key={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}

export default SortBy;
