import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useConvertCurrency } from '../../hooks/useConvertCurrency';
import { formatCurrency } from '../../utils/helpers';
import { addItem } from '../cart/cartSlice';
import Button from '../../ui/Button';
import ImageBox from '../../ui/ImageBox';
import QuantityButton from '../../ui/QuantityButton';
import MenuModalItem from './MenuModalItem';
import MenuHeader from './MenuHeader';

const SIZES = ['small', 'medium', 'large'];

function MenuModal({ pizza, onCloseModal }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(1);
  const [currentSize, setCurrentSize] = useState(SIZES[0]);
  const { imageUrl, name, ingredients, unitPrice } = pizza;
  const newUnitPrice = useConvertCurrency(unitPrice, 'THB');

  let currentPrice;
  if (currentSize === SIZES[0])
    currentPrice = newUnitPrice && newUnitPrice - 200;
  if (currentSize === SIZES[1]) currentPrice = newUnitPrice - 100;
  if (currentSize === SIZES[2]) currentPrice = newUnitPrice;

  const totalPrice = currentPrice * quantity;

  function handleInc() {
    setQuantity((num) => num + 1);
  }

  function handleDec() {
    setQuantity((num) => (num - 1 >= 1 ? num - 1 : 1));
  }

  function handleAddToCart(goToCart = false) {
    const order = {
      name,
      imageUrl,
      size: currentSize,
      quantity,
      unitPrice: currentPrice,
      totalPrice,
    };

    dispatch(addItem(order));
    if (goToCart === true) navigate('/cart');
    else onCloseModal();
  }

  return (
    <div className="flex w-[500px] flex-col justify-center gap-5">
      <header>
        <MenuHeader name={name} ingredients={ingredients} size="text-[31px]" />
      </header>

      <main className="flex flex-col gap-3 tracking-wide [&>*]:flex [&>*]:items-center">
        <ImageBox src={imageUrl} alt={name} type="tertiary" />
        <MenuModalItem label="size">
          {SIZES.map((size) => (
            <Button
              key={size}
              onClick={() => setCurrentSize(size)}
              type={currentSize === size ? 'activeSize' : 'tertiary'}
              className="mr-3"
            >
              {size}
            </Button>
          ))}
        </MenuModalItem>
        <MenuModalItem label="quantity">
          <QuantityButton
            onClickDec={handleDec}
            onClickInc={handleInc}
            quantity={quantity}
          />
        </MenuModalItem>
        <MenuModalItem label="price">
          {(currentPrice && formatCurrency(currentPrice)) || null}
        </MenuModalItem>
        <MenuModalItem label="total">
          {(totalPrice && formatCurrency(totalPrice)) || null}
        </MenuModalItem>
      </main>

      <footer className="ml-auto mt-2 flex items-center gap-2">
        <Button type="quaternary" onClick={() => handleAddToCart(true)}>
          Buy Now
        </Button>
        <Button type="primary" onClick={handleAddToCart}>
          + Add to Cart
        </Button>
      </footer>
    </div>
  );
}

export default MenuModal;
