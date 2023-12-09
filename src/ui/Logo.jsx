import pizzaLogo from '../assets/images/logo/pizza-logo.png';
import ImageBox from './ImageBox';
import LinkButton from './LinkButton';

function Logo() {
  return (
    <LinkButton to="/" type="logo">
      <ImageBox src={pizzaLogo} alt="Pizza" className="h-12 w-12" />
      <h1>Napopizza</h1>
    </LinkButton>
  );
}

export default Logo;
