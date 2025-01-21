import Form from '../../ui/Form';
import Heading from '../../ui/Heading';
import Input from '../../ui/Input';
import FormRow from '../../ui/FormRow';
import Button from '../../ui/Button';
import { useUpdateProfile } from './useUpdateProfile';
import { useFormHook } from '../../hooks/useFormHook';

function Profile() {
  const { updateProfile, isLoading } = useUpdateProfile();
  const { register, handleSubmit, errors, onSubmit } =
    useFormHook(updateProfile);

  return (
    <div className="flex h-full items-center justify-center dark:text-white">
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Heading type="primary">Profile</Heading>
        <FormRow label="full name" error={errors?.fullName?.message}>
          <Input
            type="text"
            id="name"
            register={register}
            disabled={isLoading}
            data={{ required: 'This field is required' }}
          />
        </FormRow>

        <FormRow label="email address" error={errors?.email?.message}>
          <Input
            type="email"
            id="email"
            register={register}
            disabled={isLoading}
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
    </div>
  );
}

export default Profile;
