import { useQuery } from '@tanstack/react-query';
import { getAllDeliveries } from '../../services/apiRestaurant';

export function useDeliveries() {
  const { data, isLoading, error } = useQuery({
    queryFn: getAllDeliveries,
    queryKey: ['deliveries'],
  });

  return { data, isLoading, error };
}
