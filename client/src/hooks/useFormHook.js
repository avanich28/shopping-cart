import { useForm } from 'react-hook-form';

export function useFormHook(handler) {
  const { register, formState, handleSubmit, reset, getValues } = useForm();
  const { errors } = formState;

  function onSubmit(data) {
    handler(data, { onSettled: reset });
  }
  return { register, handleSubmit, reset, getValues, errors, onSubmit };
}
