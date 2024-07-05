import Heading from './Heading';
import LinkButton from './LinkButton';

function Logo() {
  return (
    <LinkButton to="/" type="logo">
      <div className="font-emoji text-4xl">🍕</div>
      <Heading type="logo">Pizzeria</Heading>
    </LinkButton>
  );
}

export default Logo;
