import { useMutation, useQueryClient } from '@tanstack/react-query';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';

export function useLogOut() {
  const queryClient = useQueryClient();

  const { mutate: logout, isPending } = useMutation({
    mutationFn: () => Cookies.remove('token'),
    onSuccess: () => {
      queryClient.removeQueries();

      const url = `${window.location.protocol}//${window.location.host}/shopping-cart/users/log-in`;

      window.location.replace(url);
    },
    onError: (err) => {
      throw Error(err.message);
    },
  });

  return { logout, isPending };
}
