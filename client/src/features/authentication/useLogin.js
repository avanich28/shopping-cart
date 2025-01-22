import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import { login as loginApi } from '../../services/apiAuth';
import toast from 'react-hot-toast';

export function useLogin() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { mutate: login, isPending } = useMutation({
    mutationFn: ({ email, password }) => loginApi({ email, password }),
    onSuccess: (data) => {
      const { name, email } = data.data.user;
      Cookies.set('token', data.token, {
        expires: 7,
        secure: true,
      });
      queryClient.setQueriesData(['user'], { name, email });
      navigate('/shopping-cart/');
    },
    onError: (err) => {
      toast.error('Provided email or password are incorrect'); // BUG
      throw new Error(err.message);
    },
  });

  return { login, isPending };
}
