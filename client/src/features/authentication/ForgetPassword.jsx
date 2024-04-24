import { useForm } from 'react-hook-form';
import Form from '../../ui/Form';

function ForgetPassword() {
  const { register, formState, handleSubmit, reset } = useForm();
  const { errors } = formState;

  function onSubmit(data) {
    console.log(data);
  }

  return (
    <Form onSubmit={onSubmit} handleSubmit={handleSubmit}>
      Forget Password
    </Form>
  );
}

export default ForgetPassword;
