import LinkButton from './LinkButton';

function Logo() {
  return (
    <LinkButton to="/" type="logo">
      <div className="flex-none">
        <img className="h-12 w-full" src="../../public/pizza.png" alt="pizza" />
      </div>
      <h1>Napopizza</h1>
    </LinkButton>
  );
}

export default Logo;
