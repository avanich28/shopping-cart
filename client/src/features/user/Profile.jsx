import { useForm } from 'react-hook-form';
import Form from '../../ui/Form';
import Heading from '../../ui/Heading';
import Input from '../../ui/Input';
import FormRow from '../../ui/FormRow';
import Button from '../../ui/Button';
import { useUpdateProfile } from './useUpdateProfile';

function Profile() {
  const { updateProfile, isLoading } = useUpdateProfile();
  const { register, formState, handleSubmit, reset } = useForm();
  const { errors } = formState;

  function onSubmit(data) {
    const { name, email } = data;

    updateProfile(
      { name, email },
      {
        onSettled: reset,
      },
    );
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Heading type="primary">Profile</Heading>
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

      <Button type="primary" btnType="submit" disabled={isLoading}>
        UPDATE
      </Button>
    </Form>
  );
}

export default Profile;
