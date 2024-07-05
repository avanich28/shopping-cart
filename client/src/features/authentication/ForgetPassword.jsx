import { useForm } from 'react-hook-form';
import Form from '../../ui/Form';
import Heading from '../../ui/Heading';
import FormRow from '../../ui/FormRow';
import Input from '../../ui/Input';
import Button from '../../ui/Button';

function ForgetPassword() {
  const { register, formState, handleSubmit, reset } = useForm();
  const { errors } = formState;

  function onSubmit(data) {
    console.log(data);
  }

  return (
    <Form onSubmit={onSubmit} handleSubmit={handleSubmit}>
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
