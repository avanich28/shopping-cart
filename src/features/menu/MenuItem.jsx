import { formatCurrency } from '../../utils/helpers';
import { useConvertCurrency } from '../../hooks/useConvertCurrency';
import ImageBox from '../../ui/ImageBox';
import Button from '../../ui/Button';
import Heading from '../../ui/Heading';

function MenuItem({ pizza, detail = true, type }) {
  const { imageUrl, name, ingredients, unitPrice } = pizza;
  const newUnitPrice = useConvertCurrency(unitPrice, 'THB');

  const defaultStyles = {
    primary:
      'flex w-48 flex-col items-center border-2 border-amber-100 p-2 text-[14px] tracking-wider transition-all hover:border-amber-300 cursor-auto',
    secondary:
      'flex w-[450px] gap-4 overflow-hidden border-2 border-amber-100 bg-white transition-all hover:border-amber-300 animate-slideD opacity-0',
  };

  return (
    <Button className={defaultStyles[type]}>
      <ImageBox src={imageUrl} alt={name} type={type} />

      {detail ? (
        <>
          <div className="mt-1 flex flex-col items-start">
            <Heading type="secondary">{name}</Heading>
            <p className="text-left italic text-stone-500">
              {ingredients.join(', ')}
            </p>
          </div>
          <p className="mb-1 ml-auto mr-2 self-end text-xl font-semibold tracking-wide">
            {formatCurrency(newUnitPrice)}
          </p>
        </>
      ) : (
        <Heading>{name}</Heading>
      )}
    </Button>
  );
}

export default MenuItem;
