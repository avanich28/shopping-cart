import { useState } from 'react';
import Button from '../../ui/Button';
import Heading from '../../ui/Heading';
import ImageBox from '../../ui/ImageBox';
import { useConvertCurrency } from '../../hooks/useConvertCurrency';
import { formatCurrency } from '../../utils/helpers';
import LinkButton from '../../ui/LinkButton';

function MenuModal({ pizza }) {
  const [quantity, setQuantity] = useState(1);
  const { imageUrl, name, ingredients, unitPrice } = pizza;
  const newUnitPrice = useConvertCurrency(unitPrice, 'THB');
  const [curSize, setCurSize] = useState({});

  const allSizePrices = [
    {
      size: 'small',
      price: newUnitPrice - 200,
    },
    {
      size: 'medium',
      price: newUnitPrice - 100,
    },
    { size: 'large', price: newUnitPrice },
  ];

  function handleInc() {
    setQuantity((num) => num + 1);
  }

  function handleDec() {
    setQuantity((num) => (num - 1 >= 1 ? num - 1 : 1));
  }

  return (
    <div className="flex flex-col justify-center gap-5">
      <header>
        <Heading type="secondary">{name}</Heading>
        <p className="italic text-stone-500">{ingredients.join(', ')}</p>
      </header>
      <main className="flex flex-col gap-3 tracking-wide [&>*]:flex [&>*]:items-center">
        <ImageBox
          src={imageUrl}
          alt={name}
          className="h-60 w-60 self-center overflow-hidden rounded-full"
        />
        <div className="gap-11">
          <p>Size:</p>
          <div
            className={`flex gap-3 [&>*]:rounded-full [&>*]:border-2 [&>*]:px-2 [&>*]:py-1 [&>*]:capitalize`}
          >
            {allSizePrices.map((data) => (
              <Button
                className={
                  curSize.size === data.size
                    ? 'border-amber-100 bg-amber-300'
                    : ''
                }
                onClick={() => setCurSize(data)}
                key={data.size}
              >
                {data.size} {formatCurrency(data.price)}
              </Button>
            ))}
          </div>
        </div>
        <div className="gap-3">
          <p>Quantity:</p>
          <div className="flex items-center">
            <Button type="primary" className="h-8 w-8" onClick={handleDec}>
              -
            </Button>
            <p className="w-16 text-center">{quantity}</p>
            <Button type="primary" className="h-8 w-8" onClick={handleInc}>
              +
            </Button>
          </div>
        </div>
        <div className="gap-11">
          <p>Total:</p>
          <p>
            {curSize.price ? formatCurrency(curSize.price * quantity) : '-'}
          </p>
        </div>
      </main>
      <footer className="ml-auto mt-2 flex items-center gap-3">
        <LinkButton
          to="/cart"
          className="rounded-full bg-stone-200 px-3 py-1 text-sm uppercase hover:scale-105 active:scale-100"
        >
          Buy Now
        </LinkButton>
        <Button type="primary">+ Add to Cart</Button>
      </footer>
    </div>
  );
}

export default MenuModal;
