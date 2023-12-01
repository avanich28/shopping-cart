import LinkButton from './LinkButton';
import { HiMoon } from 'react-icons/hi2';
import { HiMiniMagnifyingGlass } from 'react-icons/hi2';
import { HiOutlineShoppingCart } from 'react-icons/hi2';

function HeaderNav() {
  return (
    <div className="ml-auto flex items-center gap-6">
      <LinkButton to="/" type="nav">
        Home
      </LinkButton>
      <LinkButton to="/menu" type="nav">
        Menu
      </LinkButton>
      <LinkButton to="about-us" type="nav">
        About Us
      </LinkButton>
      <LinkButton to="contact" type="nav">
        Contact Us
      </LinkButton>
      <LinkButton type="iconNav">
        <HiMiniMagnifyingGlass />
      </LinkButton>
      <LinkButton type="iconNav">
        <HiOutlineShoppingCart />
      </LinkButton>
      <LinkButton type="iconNav">
        <HiMoon />
      </LinkButton>
      <LinkButton type="logIn">Log In</LinkButton>
    </div>
  );
}

export default HeaderNav;
