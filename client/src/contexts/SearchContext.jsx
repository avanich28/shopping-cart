import { createContext, useContext, useState } from 'react';

const SearchContext = createContext();

function SearchProvider({ children }) {
  const [openSearch, setOpenSearch] = useState(false);
  const [query, setQuery] = useState('');
  const [updateQuery, setUpdateQuery] = useState('');

  function handleUpdateQuery() {
    setUpdateQuery(query);
  }

  function toggleSearch(e) {
    e.preventDefault();
    e.stopPropagation();
    setOpenSearch((isOpen) => !isOpen);
    if (query) setQuery('');
  }

  function resetSearch() {
    setOpenSearch(false);
    setQuery('');
    setUpdateQuery('');
  }

  return (
    <SearchContext.Provider
      value={{
        openSearch,
        setOpenSearch,
        query,
        setQuery,
        updateQuery,
        handleUpdateQuery,
        resetSearch,
        toggleSearch,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
}

function useSearch() {
  const context = useContext(SearchContext);
  if (context === undefined)
    throw new Error('SearchContext was used outside SearchProvider');

  return context;
}

export { SearchProvider, useSearch };
