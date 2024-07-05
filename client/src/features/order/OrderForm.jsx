import { useSelector } from 'react-redux';
import {
  getCart,
  clearCart,
  getTotalItems,
  getTotalPrices,
} from '../cart/cartSlice';
import Heading from '../../ui/Heading';
import { formatCurrency } from '../../utils/helpers';
import OrderItem from './OrderItem';
import { DELIVERY_CHARGE } from '../../utils/constants';
import Button from '../../ui/Button';

function OrderForm() {
  const carts = useSelector(getCart);
  const totalItems = useSelector(getTotalItems);
  const totalPrices = useSelector(getTotalPrices);
  const tax = totalPrices * 0.07;

  function onSubmit() {
    console.log('yeah');
    clearCart();
  }

  return (
    <div className="flex flex-col gap-4 p-5">
      <Heading type="primary">Receipt</Heading>
      <div className="flex border-b-2 border-stone-800 [&>*]:w-[250px]">
        <Heading type="secondary">Menu</Heading>
        <Heading type="secondary">Price</Heading>
        <Heading type="secondary">Quantity (Plates)</Heading>
        <Heading type="secondary">Total</Heading>
      </div>
      <div className="[&>div>span]:mb-2 [&>div>span]:w-[250px] [&>div]:flex">
        {carts.map((item) => (
          <OrderItem key={item.name} item={item} />
        ))}
        <div className="mt-3">
          <span>Delivery Charge</span>
          <span></span>
          <span></span>
          <span className="">{formatCurrency(DELIVERY_CHARGE)}</span>
        </div>
        <div className="mb-4">
          <span>Tax</span>
          <span></span>
          <span></span>
          <span className="">{formatCurrency(tax)}</span>
        </div>
        <div className="font-bold">
          <span>Total</span>
          <span></span>
          <span>{totalItems}</span>
          <span>{formatCurrency(totalPrices + DELIVERY_CHARGE + tax)}</span>
        </div>
      </div>
      <Button type="primary" className="mt-2" onClick={onSubmit}>
        Check bill
      </Button>
    </div>
  );
}

export default OrderForm;
