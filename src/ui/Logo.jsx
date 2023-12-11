import pizzaLogo from '../assets/images/logo/pizza-logo.png';
import ImageBox from './ImageBox';
import LinkButton from './LinkButton';

function Logo() {
  return (
    <LinkButton to="/" type="logo">
      <ImageBox src={pizzaLogo} alt="Pizza" type="logo" />
      <h1>Napopizza</h1>
    </LinkButton>
  );
}

export default Logo;
