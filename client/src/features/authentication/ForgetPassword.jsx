import { useFormHook } from '../../hooks/useFormHook';
import Button from '../../ui/Button';
import Form from '../../ui/Form';
import FormRow from '../../ui/FormRow';
import Heading from '../../ui/Heading';
import Input from '../../ui/Input';
import { useForgetPassword } from './useForgetPassword';

function ForgetPassword() {
  const { forgetPassword, isLoading } = useForgetPassword();
  const { register, handleSubmit, errors, onSubmit } =
    useFormHook(forgetPassword);

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
