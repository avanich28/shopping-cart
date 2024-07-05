import Profile from './Profile';
import Password from './Password';

function Setting() {
  return (
    <div className="flex flex-col gap-5 pt-[10vh]">
      <Profile />
      <Password />
    </div>
  );
}

export default Setting;
