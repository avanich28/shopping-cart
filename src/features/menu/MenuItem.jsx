import ImageBox from '../../ui/ImageBox';
import Button from '../../ui/Button';
import Heading from '../../ui/Heading';
import MenuHeader from './MenuHeader';

function MenuItem({ pizza, detail = true, type, onClick, imgGrey = false }) {
  const { imageUrl, name, ingredients, soldOut } = pizza;

  const defaultStyles = {
    primary:
      'flex w-48 flex-col items-center p-2 text-[14px] tracking-wider transition-all cursor-auto',
    secondary:
      'flex gap-4 overflow-hidden transition-all hover:bg-stone-200 animate-slideD opacity-0 w-full',
  };

  return (
    <Button
      className={`${defaultStyles[type]} ${
        soldOut && imgGrey
          ? 'cursor-not-allowed border-stone-300 hover:border-stone-300'
          : ''
      }`}
      onClick={onClick}
      disabled={soldOut}
    >
      <ImageBox
        src={imageUrl}
        alt={name}
        type={type}
        className={soldOut && imgGrey ? 'grayscale' : ''}
      />
      {detail ? (
        <>
          <div className="mt-1 flex flex-col items-start">
            <MenuHeader
              name={name}
              ingredients={ingredients}
              size="text-base"
            />
          </div>
          <p className="text-md mb-1 ml-auto mr-2 flex-none self-end font-semibold uppercase tracking-wide text-red-700">
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
