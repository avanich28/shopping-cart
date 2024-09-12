import Profile from './Profile';
import Password from './Password';
import LinkButton from '../../ui/LinkButton';

function Setting() {
  return (
    <div className="mb-[10vh] mt-[10vh] flex flex-col gap-4">
      <Profile />
      <Password />
    </div>
  );
}

export default Setting;
