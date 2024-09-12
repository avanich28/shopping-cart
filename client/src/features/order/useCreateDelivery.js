import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { createDelivery as createDeliveryApi } from '../../services/apiRestaurant';

export function useCreateDelivery() {
  const navigate = useNavigate();

  const { mutate: createDelivery, isLoading } = useMutation({
    mutationFn: (order) => createDeliveryApi(order),
    onSuccess: (data) => {
      navigate('/menu');
    },
    onError: (err) => {
      console.log('ERROR', err); // TODO
    },
  });

  return { createDelivery, isLoading };
}
