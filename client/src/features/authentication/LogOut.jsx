import Cookies from 'js-cookie';
import LinkButton from '../../ui/LinkButton';
import { useNavigate } from 'react-router-dom';

function LogOut() {
  const navigate = useNavigate();

  function handleLogout() {
    Cookies.remove('token');
    navigate('/');
    window.location.reload();
  }

  return (
    <LinkButton to="/" type="signIn" onClick={handleLogout}>
      Logout
    </LinkButton>
  );
}

export default LogOut;
