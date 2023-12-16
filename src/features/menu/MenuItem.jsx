import { formatCurrency } from '../../utils/helpers';
import { useConvertCurrency } from '../../hooks/useConvertCurrency';
import ImageBox from '../../ui/ImageBox';
import Button from '../../ui/Button';
import Heading from '../../ui/Heading';

function MenuItem({ pizza, detail = true, type, onClick }) {
  const { imageUrl, name, ingredients, soldOut } = pizza;
  console.log(pizza);

  const defaultStyles = {
    primary:
      'flex w-48 flex-col items-center border-2 border-amber-100 p-2 text-[14px] tracking-wider transition-all hover:border-amber-300 cursor-auto',
    secondary:
      'flex w-[450px] gap-4 overflow-hidden border-2 border-amber-100 bg-white transition-all hover:border-amber-300 animate-slideD opacity-0',
  };

  return (
    <Button
      className={`${defaultStyles[type]} ${
        soldOut ? 'cursor-not-allowed' : ''
      }`}
      onClick={soldOut ? '' : onClick}
    >
      <ImageBox
        src={imageUrl}
        alt={name}
        type={type}
        className={soldOut ? 'grayscale' : ''}
      />
      {detail ? (
        <>
          <div className="mt-1 flex flex-col items-start">
            <Heading type="secondary">{name}</Heading>
            <p className="text-left italic text-stone-500">
              {ingredients.join(', ')}
            </p>
          </div>
          <p className="mb-1 ml-auto mr-2 flex-none self-end text-base font-semibold uppercase tracking-wide text-red-700">
            {soldOut && 'Sold out'}
          </p>
        </>
      ) : (
        <Heading>{name}</Heading>
      )}
    </Button>
  );
}

export default MenuItem;
