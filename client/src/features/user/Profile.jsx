import { useForm } from 'react-hook-form';
import Form from '../../ui/Form';
import Heading from '../../ui/Heading';
import Input from '../../ui/Input';
import FormRow from '../../ui/FormRow';

function Profile() {
  const { register, formState, handleSubmit, reset, getValues } = useForm();
  const { errors } = formState;

  function onSubmit(data) {
    console.log(data);
  }

  return (
    <Form>
      <Heading type="primary">Profile</Heading>
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
    </Form>
  );
}

export default Profile;
