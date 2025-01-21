import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { signup as signupApi } from '../../services/apiAuth';

export function useSignUp() {
  const navigate = useNavigate();

  const { mutate: signup, isLoading } = useMutation({
    mutationFn: (user) => signupApi(user),
    onSuccess: () => {
      navigate('/shopping-cart/users/log-in');
    },
  });

  return { signup, isLoading };
}
