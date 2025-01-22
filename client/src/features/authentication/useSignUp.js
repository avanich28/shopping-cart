import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { signup as signupApi } from '../../services/apiAuth';
import toast from 'react-hot-toast';

export function useSignUp() {
  const navigate = useNavigate();

  const { mutate: signup, isPending } = useMutation({
    mutationFn: (data) => signupApi(data),
    onSuccess: (data) => {
      console.log(data);
      navigate('/shopping-cart/users/log-in'); // BUG
    },
    onError: (err) => {
      toast.error(err.message);
      throw new Error(err.message);
    },
  });

  return { signup, isPending };
}
