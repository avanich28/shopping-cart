import { useMutation } from '@tanstack/react-query';
import { updateProfile as updateProfileApi } from '../../services/apiAuth';
import toast from 'react-hot-toast';

export function useUpdateProfile() {
  const { mutate: updateProfile, isLoading } = useMutation({
    mutationFn: (data) => updateProfileApi(data),
    onSuccess: () => {
      toast.success('Profile updated!');
    },
    onError: (err) => {
      throw Error(err.message);
    },
  });

  return { updateProfile, isLoading };
}
