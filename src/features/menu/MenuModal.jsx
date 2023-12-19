import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { useConvertCurrency } from '../../hooks/useConvertCurrency';
import { formatCurrency } from '../../utils/helpers';
import { addItem, getCart } from '../cart/cartSlice';

import Button from '../../ui/Button';
import Heading from '../../ui/Heading';
import ImageBox from '../../ui/ImageBox';
import LinkButton from '../../ui/LinkButton';
import { HiMiniMinusCircle, HiMiniPlusCircle } from 'react-icons/hi2';

function MenuModal({ pizza, onCloseModal }) {
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(1);
  const { imageUrl, name, ingredients, unitPrice } = pizza;
  const newUnitPrice = useConvertCurrency(unitPrice, 'THB');
  const [curSize, setCurSize] = useState({});
  const totalPrice = curSize.price && curSize.price * quantity;

  const cart = useSelector(getCart);
  console.log(cart);

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

  function handleAddToCart() {
    if (!curSize.size) return;

    const order = {
      name,
      imageUrl,
      size: curSize.size,
      quantity,
      unitPrice: curSize.price,
      totalPrice,
    };

    dispatch(addItem(order));
    onCloseModal();
  }

  return (
    <div className="flex flex-col justify-center gap-5">
      <header>
        <Heading type="secondary" className="text-[30px]">
          {name}
        </Heading>
        <p className="italic text-stone-500">{ingredients.join(', ')}</p>
      </header>

      <main className="flex flex-col gap-3 tracking-wide [&>*]:flex [&>*]:items-center">
        <ImageBox src={imageUrl} alt={name} type="tertiary" />
        <div className="gap-11">
          <p className="font-bold">Size:</p>
          <div className={`flex gap-3`}>
            {allSizePrices.map((data) => (
              <Button
                type="tertiary"
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
          <p className="font-bold">Quantity:</p>
          <div className="flex items-center">
            <Button
              className="text-2xl text-amber-300 hover:scale-110 active:scale-100"
              onClick={handleDec}
            >
              <HiMiniMinusCircle />
            </Button>
            <span className="w-[50px] text-center">{quantity}</span>
            <Button
              className="text-2xl text-amber-300 hover:scale-110 active:scale-100"
              onClick={handleInc}
            >
              <HiMiniPlusCircle />
            </Button>
          </div>
        </div>
        <div className="gap-11">
          <p className="font-bold">Total:</p>
          <p>{(totalPrice && formatCurrency(totalPrice)) || '-'}</p>
        </div>
      </main>

      <footer className="ml-auto mt-2 flex items-center gap-3">
        <LinkButton to="/cart" type="secondary">
          Buy Now
        </LinkButton>
        <Button type="primary" onClick={handleAddToCart}>
          + Add to Cart
        </Button>
      </footer>
    </div>
  );
}

export default MenuModal;
