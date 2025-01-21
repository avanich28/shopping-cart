import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { createDelivery as createDeliveryApi } from '../../services/apiRestaurant';
import store from '../../store';
import { clearCart } from '../cart/cartSlice';

export function useCreateDelivery() {
  const navigate = useNavigate();

  const { mutate: createDelivery, isLoading } = useMutation({
    mutationFn: (order) => createDeliveryApi(order),
    onSuccess: () => {
      console.log('hello');
      store.dispatch(clearCart());
      navigate('/shopping-cart/menu');
    },
    onError: (err) => {
      throw Error(err.message);
    },
  });

  return { createDelivery, isLoading };
}
