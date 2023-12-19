import { useDispatch } from 'react-redux';
import { HiMiniMinusCircle, HiMiniPlusCircle } from 'react-icons/hi2';
import { formatCurrency } from '../../utils/helpers';
import { decreaseQuantity, deleteItem, increaseQuantity } from './cartSlice';
import Button from '../../ui/Button';
import Heading from '../../ui/Heading';
import ImageBox from '../../ui/ImageBox';

function CartItem({ cart }) {
  const dispatch = useDispatch();
  const { name, imageUrl, size, quantity, unitPrice, totalPrice } = cart;
  const itemDetail = `${name}-${size}`;

  let sizeColor;
  if (size === 'small') sizeColor = 'bg-cyan-400';
  if (size === 'medium') sizeColor = 'bg-emerald-400';
  if (size === 'large') sizeColor = 'bg-red-400';

  function handleDeleteItem() {
    dispatch(deleteItem(name, size));
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
          <span className="w-[45px] text-lg text-stone-700">x {quantity}</span>
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
            <span
              className={`rounded-lg ${sizeColor} p-1 px-2 text-sm font-bold uppercase tracking-wide text-stone-50`}
            >
              {size}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <span className="rounded-lg bg-stone-300 px-2 py-1 text-sm font-bold tracking-wide text-stone-50">
              {formatCurrency(unitPrice)}
            </span>
            <span className="rounded-lg bg-amber-300 px-2 py-1 text-sm font-bold uppercase tracking-wide text-stone-50">
              Total {formatCurrency(totalPrice)}
            </span>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-5">
        <span className="flex">
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
        </span>
        <Button type="primary" onClick={handleDeleteItem}>
          Delete
        </Button>
      </div>
    </li>
  );
}

export default CartItem;
