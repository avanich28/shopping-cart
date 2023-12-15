import pizzaLogo from '../assets/images/logo/pizza-logo.png';
import Heading from './Heading';
import ImageBox from './ImageBox';
import LinkButton from './LinkButton';

function Logo() {
  return (
    <LinkButton to="/" type="logo">
      <ImageBox src={pizzaLogo} alt="Pizza" type="logo" />
      <Heading type="logo">Napopizza</Heading>
    </LinkButton>
  );
}

export default Logo;
