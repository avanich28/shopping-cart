import LinkButton from './LinkButton';
import { HiMoon } from 'react-icons/hi2';
import { HiMiniMagnifyingGlass } from 'react-icons/hi2';
import Button from './Button';
import { useSearch } from '../contexts/searchContext';
import CartCount from '../features/cart/CartCount';
import { useState } from 'react';

function HeaderNav() {
  const [login, setLogin] = useState(true);
  const { toggleSearch, resetSearch } = useSearch();

  return (
    <div className="ml-auto flex items-center gap-6">
      <LinkButton to="/" type="nav" onClick={resetSearch}>
        Home
      </LinkButton>
      <LinkButton to="menu" type="nav">
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

      {login ? (
        <LinkButton to="users/log-in" type="signIn">
          Logout
        </LinkButton>
      ) : (
        <LinkButton to="users/sign-up" type="signIn" onClick={resetSearch}>
          Sign Up
        </LinkButton>
      )}
    </div>
  );
}

export default HeaderNav;
