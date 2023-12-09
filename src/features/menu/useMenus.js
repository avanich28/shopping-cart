import { useQuery } from '@tanstack/react-query';
import { getMenus } from '../../services/apiRestaurant';

export function useMenus() {
  const { data, isLoading, error } = useQuery({
    queryFn: getMenus,
    queryKey: ['menus'],
  });

  return { data, isLoading, error };
}
