import { formatCurrency } from '../../utils/helpers';

function OrderItem({ item }) {
  return (
    <div>
      <span>
        {item.name} ({item.size})
      </span>
      <span>{formatCurrency(item.unitPrice)}</span>
      <span>{item.quantity}</span>
      <span>{formatCurrency(item.totalPrice)}</span>
    </div>
  );
}

export default OrderItem;
