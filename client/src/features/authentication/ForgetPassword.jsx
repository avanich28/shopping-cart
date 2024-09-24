import { useForm } from 'react-hook-form';
import Form from '../../ui/Form';
import Heading from '../../ui/Heading';
import FormRow from '../../ui/FormRow';
import Input from '../../ui/Input';
import Button from '../../ui/Button';
import { useForgetPassword } from './useForgetPassword';

function ForgetPassword() {
  const { register, formState, handleSubmit, reset } = useForm();
  const { errors } = formState;
  const { forgetPassword, isLoading } = useForgetPassword();

  function onSubmit(data) {
    const { email } = data;
    forgetPassword(
      { email },
      {
        onSettled: reset,
      },
    );
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Heading type="primary">Forget password</Heading>
      <FormRow label="email address" error={errors?.email?.message}>
        <Input
          type="email"
          id="email"
          register={register}
          data={{ required: 'This field is required' }}
        />
      </FormRow>

      <Button type="primary" disabled={isLoading}>
        Submit
      </Button>
    </Form>
  );
}

export default ForgetPassword;
