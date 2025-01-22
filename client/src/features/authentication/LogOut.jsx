import Button from '../../ui/Button';
import { useLogOut } from './useLogOut';

function LogOut() {
  const { logout, isPending } = useLogOut();

  return (
    <Button
      type="logOut"
      btnType="submit"
      disabled={isPending}
      onClick={logout}
    >
      Logout
    </Button>
  );
}

export default LogOut;
