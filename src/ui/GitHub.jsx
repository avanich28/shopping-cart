import Hyperlink from './Hyperlink';
import { FaGithub } from 'react-icons/fa6';

function GitHub() {
  return (
    <Hyperlink
      type="gitHub"
      href="https://github.com/avanich28/shopping-cart.git"
    >
      <FaGithub className="text-5xl" />
      <p className="text-xs">Copyright&copy; by avanich28</p>
    </Hyperlink>
  );
}

export default GitHub;
