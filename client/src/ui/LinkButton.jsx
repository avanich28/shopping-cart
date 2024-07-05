import { Link } from 'react-router-dom';

function LinkButton({ children, to, type = '', onClick }) {
  const defaultStyles = {
    primary:
      'mt-2 rounded-full bg-amber-300 px-3 py-1 text-sm uppercase tracking-wider transition-all ease-in-out hover:scale-105 hover:text-amber-50 active:scale-100',
    secondary:
      'rounded-full bg-stone-200 px-3 py-1 text-sm uppercase hover:scale-105 active:scale-100',
    logo: 'flex items-end gap-3 tracking-wide',
    nav: 'hover:border-b-8 hover:border-amber-50 hover:text-amber-50 uppercase text-sm',
    nav2: 'flex gap-2 items-center uppercase text-sm hover:text-amber-500',
    iconNav: 'text-stone-800 hover:text-amber-50 text-2xl',
    signIn:
      'rounded-full bg-stone-800 px-5 py-1 text-xs text-amber-300 hover:scale-[1.04] hover:text-amber-50 active:scale-100 uppercase',
    footer: 'hover:text-amber-300',
  };

  return (
    <Link
      to={to}
      className={`transition-all ease-in-out ${defaultStyles[type]}`}
      onClick={onClick}
    >
      {children}
    </Link>
  );
}

export default LinkButton;
