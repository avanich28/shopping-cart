import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { forgetPassword as forgetPasswordApi } from '../../services/apiAuth';

export function useForgetPassword() {
  const navigate = useNavigate();

  const { mutate: forgetPassword, isLoading } = useMutation({
    mutationFn: (email) => forgetPasswordApi(email),
    onSuccess: (data) => {
      console.log('YEAH', data);
      // navigate('/');
    },
    onError: (err) => {
      console.log('ERROR', err); // TODO
    },
  });

  return { forgetPassword, isLoading };
}
