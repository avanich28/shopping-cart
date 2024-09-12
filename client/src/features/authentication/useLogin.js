import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import Cookies from 'js-cookie';
import { login as loginApi } from '../../services/apiAuth';

export function useLogin() {
  const navigate = useNavigate();

  const { mutate: login, isLoading } = useMutation({
    mutationFn: ({ email, password }) => loginApi({ email, password }),
    onSuccess: (user) => {
      Cookies.set('token', user.token, { expires: 7, secure: true });
      navigate('/');
      window.location.reload();
    },
    onError: (err) => {
      console.log('ERROR', err); // TODO
      toast.error('Provided email or password are incorrect');
    },
  });

  return { login, isLoading };
}
