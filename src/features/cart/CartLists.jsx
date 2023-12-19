import { useSelector } from 'react-redux';
import { getCart } from './CartSlice';
import { formatCurrency } from '../../utils/helpers';
import Heading from '../../ui/Heading';
import CartItem from './CartItem';
import Button from '../../ui/Button';
import LinkButton from '../../ui/LinkButton';
import { useNavigate } from 'react-router-dom';

function CartLists() {
  const navigate = useNavigate();
  const carts = useSelector(getCart);
  const totalPrices = carts.reduce((acc, cur) => acc + cur.totalPrice, 0);

  function handleCreateOrder() {
    navigate('/order');
  }

  return (
    <div className="px-4 pb-3 pt-10">
      <header className="mb-3 flex items-center justify-between gap-2">
        <Heading type="primary">My Cart</Heading>
        <div className="ml-auto rounded-lg bg-stone-400 px-2 py-1 text-sm font-bold uppercase tracking-wide text-stone-50">
          {carts.length} Item{carts.length > 1 && 's'}
        </div>
        <div className="rounded-lg bg-orange-500 px-2 py-1 text-sm font-bold uppercase tracking-wide text-stone-50">
          Total {formatCurrency(totalPrices)}
        </div>
      </header>
      <ul className="divide-y divide-stone-300">
        {carts.map((cart) => (
          <CartItem cart={cart} key={cart.name} />
        ))}
      </ul>
      <div className="mt-2 flex items-center justify-end gap-3">
        <LinkButton to="/menu" type="secondary">
          Back to Menu
        </LinkButton>
        <Button type="primary" onClick={handleCreateOrder}>
          Create Order
        </Button>
      </div>
      {/* <div>
        <p>
          <span>Cart Total</span>
          <span>20</span>
        </p>
        <p>
          <span>Delivery Charge</span>
          <span>20</span>
        </p>
        <p>
          <span>Tax</span>
          <span>20</span>
        </p>
        <p>
          <span>Total</span>
          <span>20</span>
        </p>
      </div> */}
    </div>
  );
}

export default CartLists;
