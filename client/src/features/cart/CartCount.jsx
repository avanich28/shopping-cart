import { HiOutlineShoppingCart } from 'react-icons/hi2';
import { useSelector } from 'react-redux';
import { getCart } from './cartSlice';

function CartCount() {
  const carts = useSelector(getCart);

  return (
    <>
      <div>
        <HiOutlineShoppingCart />
      </div>
      {carts.length > 0 && (
        <span className="absolute right-[225px] top-6 flex h-4 w-4 items-center justify-center rounded-full bg-stone-900 text-xs text-stone-50  lg:right-[250px] lg:top-8">
          {carts.length}
        </span>
      )}
    </>
  );
}

export default CartCount;
