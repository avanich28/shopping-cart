import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import toast from 'react-hot-toast';
import { clearCart, getCart, getTotalItems, getTotalPrices } from './cartSlice';
import { formatCurrency } from '../../utils/helpers';
import CartItem from './CartItem';
import EmptyCart from './EmptyCart';
import Heading from '../../ui/Heading';
import Button from '../../ui/Button';
import LinkButton from '../../ui/LinkButton';
import DetailBox from '../../ui/DetailBox';

function CartLists() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const carts = useSelector(getCart);
  const totalItems = useSelector(getTotalItems);
  const totalPrices = useSelector(getTotalPrices);

  function handleCreateOrder() {
    const token = Cookies.get('token') || '';
    if (token) navigate('/order');
    else toast.error('Please log in first!');
  }

  return (
    <div className="px-4 py-10">
      <header className="mb-3 flex items-center justify-between gap-2">
        <Heading type="primary">My Cart</Heading>
        <DetailBox type="primary" bgColor="bg-stone-400" className="ml-auto">
          {totalItems} Item{totalItems > 1 && 's'}
        </DetailBox>
        <DetailBox type="primary" bgColor="bg-orange-500">
          Total {formatCurrency(totalPrices)}
        </DetailBox>
      </header>

      <ul className="divide-y divide-stone-300 dark:text-white">
        {carts.length ? (
          carts.map((cart) => <CartItem cart={cart} key={cart.name} />)
        ) : (
          <EmptyCart />
        )}
      </ul>

      <footer className="mt-5 flex items-center justify-end gap-3">
        <LinkButton to="/menu" type="secondary">
          Back to Menu
        </LinkButton>
        <Button type="quaternary" onClick={() => dispatch(clearCart())}>
          Clear Cart
        </Button>
        {carts.length > 0 && (
          <Button type="primary" onClick={handleCreateOrder}>
            Create Order
          </Button>
        )}
      </footer>
    </div>
  );
}

export default CartLists;
