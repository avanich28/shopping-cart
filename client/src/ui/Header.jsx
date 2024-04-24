import { useSearch } from '../contexts/searchContext';
import Logo from './Logo';
import HeaderNav from './HeaderNav';
import Search from './Search';

function Header() {
  const { openSearch } = useSearch();

  return (
    <div className="sticky top-0 z-20">
      <div className="relative flex items-center bg-amber-300 px-6 py-2">
        <Logo />
        <HeaderNav />
      </div>
      {openSearch && <Search />}
    </div>
  );
}

export default Header;
