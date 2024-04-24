import { useForm } from 'react-hook-form';
import Button from '../../ui/Button';
import Form from '../../ui/Form';
import Heading from '../../ui/Heading';
import Input from '../../ui/Input';
import FormRow from '../../ui/FormRow';
import Hyperlink from '../../ui/Hyperlink';

function LogIn() {
  const { register, formState, handleSubmit, reset } = useForm();
  const { errors } = formState;

  function onSubmit(data) {
    console.log(data);
  }

  return (
    <Form onSubmit={onSubmit} handleSubmit={handleSubmit}>
      <Heading type="primary">Log in</Heading>
      <FormRow label="email address" error={errors?.email?.message}>
        <Input
          type="email"
          id="email"
          register={register}
          data={{ required: 'This field is required' }}
        />
      </FormRow>

      <FormRow label="password" error={errors?.password?.message}>
        <Input
          type="password"
          id="password"
          register={register}
          data={{ required: 'This field is required' }}
        />
      </FormRow>

      <Button type="primary" onClick={reset}>
        Log in
      </Button>

      <FormRow getStyle="tertiary" hasLabel={false}>
        <Hyperlink type="auth" href="/forget-password">
          Forget your password?
        </Hyperlink>
      </FormRow>

      <FormRow
        getStyle="tertiary"
        msg="Don't have an account?"
        hasLabel={false}
      >
        <Hyperlink type="auth" href="/sign-up">
          Sign Up
        </Hyperlink>
      </FormRow>
    </Form>
  );
}

export default LogIn;
