import { useDispatch } from 'react-redux';
import { formatCurrency } from '../../utils/helpers';
import { decreaseQuantity, deleteItem, increaseQuantity } from './cartSlice';
import Button from '../../ui/Button';
import Heading from '../../ui/Heading';
import ImageBox from '../../ui/ImageBox';
import DetailBox from '../../ui/DetailBox';
import QuantityButton from '../../ui/QuantityButton';

function CartItem({ cart }) {
  const dispatch = useDispatch();
  const { name, imageUrl, size, quantity, unitPrice, totalPrice } = cart;
  const itemDetail = `${name}-${size}`;

  let sizeColor;
  if (size === 'small') sizeColor = 'bg-cyan-400';
  if (size === 'medium') sizeColor = 'bg-emerald-400';
  if (size === 'large') sizeColor = 'bg-red-400';

  function handleDeleteItem() {
    dispatch(deleteItem(itemDetail));
  }

  function handleDec() {
    dispatch(decreaseQuantity(itemDetail));
  }

  function handleInc() {
    dispatch(increaseQuantity(itemDetail));
  }

  return (
    <li className="flex flex-wrap items-center justify-between">
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-3">
          <span className="w-[45px] text-lg text-stone-700 dark:text-stone-400">
            x {quantity}
          </span>
          <ImageBox
            src={imageUrl}
            alt={name}
            type="primary"
            className="mt-3 h-[70px] w-[70px] border-[3px] border-amber-300"
          />
        </div>

        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-3">
            <Heading type="secondary">{name}</Heading>
            <DetailBox type="primary" bgColor={sizeColor}>
              {size}
            </DetailBox>
          </div>
          <div className="flex items-center gap-2">
            <DetailBox type="primary" bgColor="bg-stone-300">
              {formatCurrency(unitPrice)}
            </DetailBox>
            <DetailBox type="primary" bgColor="bg-amber-300">
              Total {formatCurrency(totalPrice)}
            </DetailBox>
          </div>
        </div>
      </div>

      <div className="flex gap-5">
        <QuantityButton
          onClickDec={handleDec}
          onClickInc={handleInc}
          quantity={quantity}
        />
        <Button type="primary" onClick={handleDeleteItem}>
          Delete
        </Button>
      </div>
    </li>
  );
}

export default CartItem;
