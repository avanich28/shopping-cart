import { useMutation } from '@tanstack/react-query';
import { signup as signupApi } from '../../services/apiAuth';
import { useNavigate } from 'react-router-dom';

export function useSignUp() {
  const navigate = useNavigate();
  const { mutate: signup, isLoading } = useMutation({
    mutationFn: (user) => signupApi(user),
    onSuccess: () => {
      navigate('/users/log-in');
    },
  });

  return { signup, isLoading };
}
