import { useForm } from 'react-hook-form';
import Button from '../../ui/Button';
import Form from '../../ui/Form';
import Heading from '../../ui/Heading';
import Input from '../../ui/Input';
import FormRow from '../../ui/FormRow';
import Hyperlink from '../../ui/Hyperlink';

function SignUp() {
  const { formState, getValues, reset, register, handleSubmit } = useForm();
  const { errors } = formState;

  console.log(errors);

  function onSubmit(data) {
    console.log(data);
  }

  return (
    <Form onSubmit={onSubmit} handleSubmit={handleSubmit}>
      <Heading type="primary">Sign up</Heading>
      <FormRow label="full name" error={errors?.fullName?.message}>
        <Input
          type="text"
          id="fullName"
          register={register}
          data={{ required: 'This field is required' }}
        />
      </FormRow>

      <FormRow label="email address" error={errors?.email?.message}>
        <Input
          type="email"
          id="email"
          register={register}
          data={{
            required: 'This field is required',
            pattern: {
              value: /\S+@\S+\.\S+/,
              message: 'Please provide a valid email address',
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

      <Button type="primary" onClick={reset}>
        Sign up
      </Button>

      <FormRow
        getStyle="tertiary"
        msg="Have already an account?"
        hasLabel={false}
      >
        <Hyperlink type="auth" href="/users/log-in">
          Log In
        </Hyperlink>
      </FormRow>
    </Form>
  );
}

export default SignUp;
