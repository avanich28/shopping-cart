import { HiMagnifyingGlass } from 'react-icons/hi2';
import { HiOutlineXMark } from 'react-icons/hi2';
import { useSearch } from '../contexts/searchContext';
import { useOutsideClick } from '../hooks/useOutsideClick';
import { useNavigate } from 'react-router-dom';
import Button from '../ui/Button';
import Input from '../ui/Input';

function Search() {
  const navigate = useNavigate();
  const { toggleSearch, resetSearch, handleUpdateQuery } = useSearch();
  const { ref } = useOutsideClick(resetSearch);

  function handleSubmit(e) {
    navigate('/menu');
    handleUpdateQuery();
    toggleSearch(e);
  }

  return (
    <div ref={ref}>
      <Input
        className="absolute z-10 flex w-full animate-slideD items-center gap-2 bg-stone-800 px-5 py-5"
        id="search"
        type="text"
        onKeyDown={(e) => (e.key === 'Enter' ? handleSubmit(e) : '')}
        onClick={handleSubmit}
      >
        <Button
          className="relative left-[-35px] text-stone-400"
          onClick={handleSubmit}
        >
          <HiMagnifyingGlass />
        </Button>
        <Button onClick={toggleSearch} className="text-lg text-stone-50">
          <HiOutlineXMark />
        </Button>
      </Input>
    </div>
  );
}

export default Search;
