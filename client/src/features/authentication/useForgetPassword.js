import { useMutation } from '@tanstack/react-query';
import { forgetPassword as forgetPasswordApi } from '../../services/apiAuth';

export function useForgetPassword() {
  const { mutate: forgetPassword, isLoading } = useMutation({
    mutationFn: (email) => forgetPasswordApi(email),
    onSuccess: () => {
      alert('Check a link in your email to reset a password!');
    },
    onError: (err) => {
      throw Error(err.message);
    },
  });

  return { forgetPassword, isLoading };
}
