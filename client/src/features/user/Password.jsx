import { useForm } from 'react-hook-form';
import Form from '../../ui/Form';
import Heading from '../../ui/Heading';
import Input from '../../ui/Input';
import FormRow from '../../ui/FormRow';
import Button from '../../ui/Button';
import { useUpdatePassword } from './useUpdatePassword';

function Password() {
  const { updatePassword, isLoading } = useUpdatePassword();
  const { register, formState, handleSubmit, reset, getValues } = useForm();
  const { errors } = formState;

  function onSubmit(data) {
    const { passwordCurrent, password, passwordConfirm } = data;

    if (!passwordCurrent || !password || !passwordConfirm) return;

    updatePassword(
      { passwordCurrent, password, passwordConfirm },
      {
        onSettled: reset,
      },
    );
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Heading type="primary">Password</Heading>
      <FormRow
        label="current password"
        error={errors?.currentPassword?.message}
      >
        <Input
          type="password"
          id="passwordCurrent"
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
        label="password confirm"
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

      <Button type="primary" btnType="submit" disabled={isLoading}>
        UPDATE
      </Button>
    </Form>
  );
}

export default Password;
