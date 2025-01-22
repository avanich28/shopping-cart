import { useMutation, useQueryClient } from '@tanstack/react-query';
import { updateProfile as updateProfileApi } from '../../services/apiAuth';
import toast from 'react-hot-toast';

export function useUpdateProfile() {
  const queryClient = useQueryClient();

  const { mutate: updateProfile, isPending } = useMutation({
    mutationFn: (data) => updateProfileApi(data),
    onSuccess: (data) => {
      const { name, email } = data.data;

      queryClient.setQueryData(['user'], { name, email });

      toast.success('Profile updated!');
    },
    onError: (err) => {
      throw new Error(err.message);
    },
  });

  return { updateProfile, isPending };
}
