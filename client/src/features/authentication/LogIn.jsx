import Button from '../../ui/Button';
import Form from '../../ui/Form';
import FormRow from '../../ui/FormRow';
import Heading from '../../ui/Heading';
import Input from '../../ui/Input';
import LinkButton from '../../ui/LinkButton';

import { useFormHook } from '../../hooks/useFormHook';
import { useLogin } from './useLogin';

function LogIn() {
  const { login, isPending } = useLogin();
  const { register, handleSubmit, errors, onSubmit } = useFormHook(login);

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Heading type="primary">Log in</Heading>
      <FormRow label="email address" error={errors?.email?.message}>
        <Input
          type="email"
          id="email"
          register={register}
          defaultValue="joyboy@test.com"
          disabled={isPending}
          data={{ required: 'This field is required' }}
        />
      </FormRow>

      <FormRow label="password" error={errors?.password?.message}>
        <Input
          type="password"
          id="password"
          register={register}
          defaultValue="test1234"
          disabled={isPending}
          data={{ required: 'This field is required' }}
        />
      </FormRow>

      <Button type="primary" btnType="submit" disabled={isPending}>
        {isPending ? 'Submitting...' : 'Log in'}
      </Button>
      {/* 
      <FormRow getStyle="tertiary" hasLabel={false}>
        <LinkButton type="link2" to="/users/forget-password">
          Forget your password?
        </LinkButton>
      </FormRow> */}

      <FormRow
        getStyle="tertiary"
        msg="Don't have an account?"
        hasLabel={false}
      >
        <LinkButton to="/shopping-cart/users/sign-up" type="link2">
          Sign Up
        </LinkButton>
      </FormRow>
    </Form>
  );
}

export default LogIn;
