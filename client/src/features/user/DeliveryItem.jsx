import { formatCurrency } from '../../utils/helpers';

function DeliveryItem({ order }) {
  const { address, totalPrice, totalItems, createdAt } = order;

  return (
    <tr>
      <td>{address}</td>
      <td>{totalItems}</td>
      <td>{formatCurrency(totalPrice)}</td>
      <td>{new Date(createdAt).toLocaleDateString('en-US')}</td>
    </tr>
  );
}

export default DeliveryItem;
