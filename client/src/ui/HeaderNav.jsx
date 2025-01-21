import { HiMoon } from 'react-icons/hi2';
import { MdSunny } from 'react-icons/md';
import { HiMiniMagnifyingGlass } from 'react-icons/hi2';
import LinkButton from './LinkButton';
import Button from './Button';
import CartCount from '../features/cart/CartCount';
import LogOut from '../features/authentication/LogOut';
import { useSearch } from '../contexts/searchContext';
import { useUser } from '../features/authentication/useUser';
import { links } from '../utils/links';
import { useTheme } from '../contexts/ThemeContext';

function HeaderNav() {
  const { theme, toggleTheme } = useTheme();
  const { toggleSearch, resetSearch } = useSearch();
  const { user } = useUser();
  const name = user ? user.data.user.name : '';

  return (
    <div className="ml-auto flex items-center gap-4 lg:gap-6">
      <div className="hidden items-center gap-6 lg:flex">
        {links.map((link) => (
          <LinkButton
            key={link.to}
            to={link.to}
            type="nav"
            onClick={resetSearch}
          >
            {link.label}
          </LinkButton>
        ))}
      </div>

      <Button type="iconNav" onClick={toggleSearch}>
        <HiMiniMagnifyingGlass />
      </Button>
      <LinkButton to="shopping-cart/cart" type="iconNav" onClick={resetSearch}>
        <CartCount />
      </LinkButton>
      <Button type="iconNav" onClick={toggleTheme}>
        {theme === 'dark' ? <MdSunny /> : <HiMoon />}
      </Button>

      {name ? (
        <LinkButton to="shopping-cart/users/me" type="link">
          {name}
        </LinkButton>
      ) : (
        <LinkButton to="shopping-cart/users/sign-up" type="link">
          Sign Up
        </LinkButton>
      )}

      {name ? (
        <LogOut />
      ) : (
        <LinkButton
          to="shopping-cart/users/log-in"
          type="signIn"
          onClick={resetSearch}
        >
          Log In
        </LinkButton>
      )}
    </div>
  );
}

export default HeaderNav;
