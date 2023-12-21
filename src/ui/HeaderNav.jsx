import LinkButton from './LinkButton';
import { HiMoon } from 'react-icons/hi2';
import { HiMiniMagnifyingGlass } from 'react-icons/hi2';
import { HiOutlineShoppingCart } from 'react-icons/hi2';
import Button from './Button';
import { useSearch } from '../contexts/searchContext';
import CartCount from '../features/cart/CartCount';

function HeaderNav() {
  const { toggleSearch, resetSearch } = useSearch();

  return (
    <div className="ml-auto flex items-center gap-6">
      <LinkButton to="/" type="nav" onClick={resetSearch}>
        Home
      </LinkButton>
      <LinkButton to="/menu" type="nav">
        Menu
      </LinkButton>
      <LinkButton to="about-us" type="nav" onClick={resetSearch}>
        About Us
      </LinkButton>
      <LinkButton to="contact" type="nav" onClick={resetSearch}>
        Contact Us
      </LinkButton>
      <Button type="iconNav" onClick={toggleSearch}>
        <HiMiniMagnifyingGlass />
      </Button>
      <LinkButton to="cart" type="iconNav" onClick={resetSearch}>
        <CartCount />
      </LinkButton>
      <LinkButton type="iconNav">
        <HiMoon />
      </LinkButton>
      <LinkButton type="logIn" onClick={resetSearch}>
        Log In
      </LinkButton>
    </div>
  );
}

export default HeaderNav;
