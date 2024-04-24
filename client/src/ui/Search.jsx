import { useNavigate } from 'react-router-dom';
import { HiMagnifyingGlass } from 'react-icons/hi2';
import { HiOutlineXMark } from 'react-icons/hi2';
import { useSearch } from '../contexts/searchContext';
import { useOutsideClick } from '../hooks/useOutsideClick';
import Button from './Button';
import Input from './Input';
import Form from './Form';

function Search() {
  const navigate = useNavigate();
  const { toggleSearch, resetSearch, handleUpdateQuery, query, setQuery } =
    useSearch();
  const { ref } = useOutsideClick(resetSearch);

  function handleSubmit(e) {
    navigate('/menu');
    handleUpdateQuery();
    toggleSearch(e);
  }

  return (
    <div ref={ref}>
      <Form setStyle="secondary">
        <Input
          type="text"
          id="search"
          placeholder="Search menu..."
          isAuth={false}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={(e) => (e.key === 'Enter' ? handleSubmit(e) : '')}
        />
        <Button
          className="relative left-[-35px] text-stone-400"
          onClick={handleSubmit}
        >
          <HiMagnifyingGlass />
        </Button>

        <Button onClick={toggleSearch} className="text-lg text-stone-800">
          <HiOutlineXMark />
        </Button>
      </Form>
    </div>
  );
}

export default Search;
