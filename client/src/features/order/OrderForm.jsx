import { useState } from 'react';
import { useSelector } from 'react-redux';
import { DELIVERY_CHARGE, calcTax } from '../../utils/constants';
import { getCart, getTotalItems, getTotalPrices } from '../cart/cartSlice';

import Heading from '../../ui/Heading';
import Button from '../../ui/Button';
import OrderItem from './OrderItem';

import { useCreateDelivery } from './useCreateDelivery';
import { formatCurrency } from '../../utils/helpers';

function OrderForm() {
  const [address, setAddress] = useState('');
  const { createDelivery } = useCreateDelivery();
  const carts = useSelector(getCart);
  const totalItems = useSelector(getTotalItems);
  const totalPrice = useSelector(getTotalPrices);
  const tax = calcTax(totalPrice);

  function onSubmit() {
    if (!address) return alert('Please fill in your address!');

    const order = {
      tax,
      totalPrice,
      cart: carts,
      totalItems,
      address,
    };

    createDelivery(order);
  }

  return (
    <div className="flex flex-col gap-4 p-5 dark:text-white">
      <Heading type="primary">Address</Heading>
      <textarea
        className="rounded-md border border-amber-400 p-2 dark:bg-stone-900"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
      ></textarea>

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
          <span>{formatCurrency(totalPrice + DELIVERY_CHARGE + tax)}</span>
        </div>
      </div>
      <Button type="primary" className="mt-2" onClick={onSubmit}>
        Check bill
      </Button>
    </div>
  );
}

export default OrderForm;
