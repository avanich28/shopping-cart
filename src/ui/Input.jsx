import { useSearch } from '../contexts/searchContext';

function Input({ children, className, id, label = '', type, onKeyDown }) {
  const { query, setQuery } = useSearch();

  return (
    <div className={className}>
      <label htmlFor={id}>{label}</label>
      <input
        className="w-full rounded-full px-3 py-1 focus:outline-none focus:ring-2 focus:ring-amber-300"
        id={id}
        type={type}
        placeholder="Search menu..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={onKeyDown}
      />
      {children}
    </div>
  );
}

export default Input;
