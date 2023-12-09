import { Link } from 'react-router-dom';

function LinkButton({ children, to, type = '' }) {
  const styles = {
    logo: 'flex items-end gap-3 font-grandstander text-3xl font-semibold tracking-wide',
    nav: 'hover:border-b-8 hover:border-amber-50 hover:text-amber-50 uppercase',
    iconNav: 'text-stone-800 hover:text-amber-50 text-2xl',
    logIn:
      'rounded-full bg-stone-800 px-5 py-1 text-sm text-amber-300 hover:scale-[1.04] hover:text-amber-50 active:scale-100',
    footer: 'hover:text-amber-300',
    primary:
      'mt-2 rounded-full bg-amber-300 px-3 py-1 text-sm uppercase tracking-wider transition-all ease-in-out hover:scale-105 hover:text-amber-50 active:scale-100',
  };
  return (
    <Link to={to} className={`transition-all ease-in-out ${styles[type]}`}>
      {children}
    </Link>
  );
}

export default LinkButton;
