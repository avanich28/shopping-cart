import DeliveryItem from './DeliveryItem';
import Spinner from '../../ui/Spinner';
import { useDeliveries } from './useDeliveries';

function Delivery() {
  const { data, isLoading } = useDeliveries();

  return (
    <>
      {isLoading ? (
        <span className="flex h-full items-center justify-center">
          <Spinner />
        </span>
      ) : (
        <table className="mx-5 my-5 w-full gap-5 text-center dark:text-white">
          <tbody className="divide-y divide-slate-200">
            <tr className="[&>th]:pb-2">
              <th>Address</th>
              <th>Amount</th>
              <th>Cost</th>
              <th>Date</th>
            </tr>

            {data?.data.map((order, i) => (
              <DeliveryItem key={i} order={order} />
            ))}
          </tbody>
        </table>
      )}
    </>
  );
}

export default Delivery;
