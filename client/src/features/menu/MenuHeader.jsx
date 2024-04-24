import Heading from '../../ui/Heading';

function MenuHeader({ name, ingredients, size = '' }) {
  return (
    <>
      <Heading type="secondary" className={size}>
        {name}
      </Heading>
      <p className="mt-2 text-left italic text-stone-500">
        {ingredients.join(', ')}
      </p>
    </>
  );
}

export default MenuHeader;
