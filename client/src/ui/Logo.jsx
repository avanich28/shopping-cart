import Heading from './Heading';
import LinkButton from './LinkButton';

function Logo() {
  return (
    <div className="hidden lg:flex">
      <LinkButton to="/" type="logo">
        <div className="font-emoji text-4xl">🍕</div>
        <Heading type="logo">Pizzeria</Heading>
      </LinkButton>
    </div>
  );
}

export default Logo;
