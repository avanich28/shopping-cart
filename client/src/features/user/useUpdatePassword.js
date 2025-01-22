import { useMutation } from '@tanstack/react-query';
import { updatePassword as updatePasswordApi } from '../../services/apiAuth';
import toast from 'react-hot-toast';

export function useUpdatePassword() {
  const { mutate: updatePassword, isPending } = useMutation({
    mutationFn: (data) => updatePasswordApi(data),
    onSuccess: (data) => {
      if (data) toast.success('Password Changed!');
      else
        toast.error(
          'Incorrect current password or confirm password does not match new password!',
        );
    },
    onError: (err) => {
      throw Error(err.message);
    },
  });

  return { updatePassword, isPending };
}
