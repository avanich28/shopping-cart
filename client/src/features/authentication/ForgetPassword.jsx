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
  const { forgetPassword } = useForgetPassword();

  function onSubmit(data) {
    const { email } = data;
    forgetPassword({ email });
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

      <Button type="primary" onClick={reset}>
        Submit
      </Button>
    </Form>
  );
}

export default ForgetPassword;
