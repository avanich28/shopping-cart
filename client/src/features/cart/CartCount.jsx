import { HiOutlineShoppingCart } from 'react-icons/hi2';
import { useSelector } from 'react-redux';
import { getCart } from './cartSlice';

function CartCount() {
  const carts = useSelector(getCart);

  return (
    <div>
      <HiOutlineShoppingCart />
      {carts.length > 0 && (
        <span className="absolute right-[170px] top-8 flex h-4 w-4 items-center justify-center rounded-full bg-stone-900 text-xs text-stone-50">
          {carts.length}
        </span>
      )}
    </div>
  );
}

export default CartCount;
