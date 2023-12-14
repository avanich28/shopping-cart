import { HiMagnifyingGlass } from 'react-icons/hi2';
import { useSearch } from '../contexts/searchContext';
import Button from './Button';

function Input({
  children,
  className,
  id,
  label = '',
  type,
  onKeyDown,
  onClick,
}) {
  const { query, setQuery } = useSearch();

  return (
    <div className={className}>
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        type={type}
        placeholder="Search..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={onKeyDown}
        className="w-full rounded-full px-3 py-1 focus:outline-none focus:ring-2 focus:ring-amber-300"
      />
      <Button
        className="relative left-[-35px] text-stone-400"
        onClick={onClick}
      >
        <HiMagnifyingGlass />
      </Button>
      {children}
    </div>
  );
}

export default Input;
