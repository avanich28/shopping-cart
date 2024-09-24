import { useForm } from 'react-hook-form';

import Form from '../../ui/Form';
import Heading from '../../ui/Heading';
import FormRow from '../../ui/FormRow';
import Input from '../../ui/Input';
import Button from '../../ui/Button';

import { useResetPassword } from './useResetPassword';

function ResetPassword() {
  const { register, getValues, formState, handleSubmit, reset } = useForm();
  const { errors } = formState;
  const { resetPassword, isLoading } = useResetPassword();

  function onSubmit(data) {
    const { password, passwordConfirm } = data;
    resetPassword(
      { password, passwordConfirm },
      {
        onSettled: reset,
      },
    );
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Heading type="primary">Reset password</Heading>

      <FormRow label="password" error={errors?.password?.message}>
        <Input
          type="password"
          id="password"
          register={register}
          data={{
            required: 'This field is required',
            minLength: {
              value: 8,
              message: 'Password needs a minimum of 8 characters',
            },
          }}
        />
      </FormRow>

      <FormRow
        label="confirm password"
        error={errors?.passwordConfirm?.message}
      >
        <Input
          type="password"
          id="passwordConfirm"
          register={register}
          data={{
            required: 'This field is required',
            validate: (value) =>
              value === getValues().password || 'Passwords need to match',
          }}
        />
      </FormRow>

      <Button type="primary" disabled={isLoading}>
        Reset
      </Button>
    </Form>
  );
}

export default ResetPassword;
