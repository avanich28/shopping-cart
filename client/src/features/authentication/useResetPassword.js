import { useMutation } from '@tanstack/react-query';
import { useNavigate, useParams } from 'react-router-dom';
import { resetPassword as resetPasswordApi } from '../../services/apiAuth';

export function useResetPassword() {
  const navigate = useNavigate();
  const { token } = useParams();

  const { mutate: resetPassword, isLoading } = useMutation({
    mutationFn: (data) => resetPasswordApi(data, token),
    onSuccess: (data) => {
      console.log('YEAH', data);
      navigate('/users/log-in');
    },
    onError: (err) => {
      throw Error(err.message);
    },
  });

  return { resetPassword, isLoading };
}
