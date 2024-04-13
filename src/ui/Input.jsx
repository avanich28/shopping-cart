import { useSearch } from '../contexts/searchContext';

function Input({ children, className, id, label = '', type, onKeyDown }) {
  const { query, setQuery } = useSearch();

  return (
    <div className={className}>
      <label htmlFor={id}>{label}</label>
      <input
        className="w-full rounded-full px-3 py-1 outline-none ring-offset-2 focus:ring focus:ring-amber-300"
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
