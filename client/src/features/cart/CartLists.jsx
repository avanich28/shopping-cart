import { useDispatch, useSelector } from 'react-redux';
import { clearCart, getCart } from './cartSlice';
import { formatCurrency } from '../../utils/helpers';
import { useNavigate } from 'react-router-dom';
import Heading from '../../ui/Heading';
import CartItem from './CartItem';
import Button from '../../ui/Button';
import LinkButton from '../../ui/LinkButton';
import EmptyCart from './EmptyCart';
import DetailBox from '../../ui/DetailBox';

function CartLists() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const carts = useSelector(getCart);
  const totalItems = carts.reduce((acc, cur) => acc + cur.quantity, 0);
  const totalPrices = carts.reduce((acc, cur) => acc + cur.totalPrice, 0);

  // TODO
  function handleCreateOrder() {
    navigate('/order');
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

      <ul className="divide-y divide-stone-300">
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
