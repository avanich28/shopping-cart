import DeliveryItem from './DeliveryItem';
import { useDeliveries } from './useDeliveries';

function Delivery() {
  const { data, isLoading } = useDeliveries();
  console.log(data);

  return (
    <table className="mx-5 my-5 w-full gap-5 divide-y divide-slate-200 text-center dark:text-white">
      <tr className="[&>th]:pb-2">
        <th>Address</th>
        <th>Amount</th>
        <th>Cost</th>
        <th>Date</th>
      </tr>
      {data?.data.map((order, i) => (
        <DeliveryItem key={i} order={order} />
      ))}
    </table>
  );
}

export default Delivery;
