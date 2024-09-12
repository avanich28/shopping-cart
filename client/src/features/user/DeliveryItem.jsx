function DeliveryItem({ index, order }) {
  const { cart, totalPrice, createdAt } = order;

  return (
    <tr className={index === 0 ? '[&>td]:py-2' : ''}>
      <td>Teparak, Samutprakarn</td>
      <td>10</td>
      <td>$200</td>
      <td>Tue Jul 02 2024</td>
    </tr>
  );
}

export default DeliveryItem;
