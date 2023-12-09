import Logo from '../ui/Logo';
import HeaderNav from './HeaderNav';

function Header() {
  return (
    <div className="sticky top-0 z-20 flex items-center bg-amber-300 px-6 py-2">
      <Logo />
      <HeaderNav />
    </div>
  );
}

export default Header;
