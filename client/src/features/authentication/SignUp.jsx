import { useForm } from 'react-hook-form';

import Button from '../../ui/Button';
import Form from '../../ui/Form';
import Heading from '../../ui/Heading';
import Input from '../../ui/Input';
import FormRow from '../../ui/FormRow';
import LinkButton from '../../ui/LinkButton';

import { useSignUp } from './useSignUp';

function SignUp() {
  const { signup } = useSignUp();
  const { formState, getValues, reset, register, handleSubmit } = useForm();
  const { errors } = formState;

  function onSubmit(data) {
    signup(data, {
      onSettled: reset,
    });
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Heading type="primary">Sign up</Heading>
      <FormRow label="full name" error={errors?.fullName?.message}>
        <Input
          type="text"
          id="name"
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

      <Button type="primary">Sign up</Button>

      <FormRow
        getStyle="tertiary"
        msg="Have already an account?"
        hasLabel={false}
      >
        <LinkButton type="link2" to="/users/log-in">
          Log In
        </LinkButton>
      </FormRow>
    </Form>
  );
}

export default SignUp;
