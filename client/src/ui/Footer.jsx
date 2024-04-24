import FooterContent from '../features/content/FooterContent';
import GitHub from './gitHub';

function Footer() {
  return (
    <footer className="flex flex-col items-center justify-center gap-1 bg-stone-800 px-6 py-6 align-middle text-amber-50">
      <FooterContent />
      <GitHub />
    </footer>
  );
}

export default Footer;
