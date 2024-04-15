import { useSearchParams } from 'react-router-dom';

function SortBy({ id, options, type, className = '' }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const sortBy = searchParams.get('sortBy') || options[0].value;

  const defaultStyles = {
    primary:
      'rounded-md border-2 border-amber-200 capitalize focus:border-amber-300 focus:outline-none',
  };

  function handleChange(e) {
    searchParams.set('sortBy', e.target.value);
    setSearchParams(searchParams);
  }

  return (
    <div className="flex gap-2">
      <label htmlFor={id}>Sort By</label>
      <select
        id={id}
        className={`${defaultStyles[type]} ${className}`}
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
