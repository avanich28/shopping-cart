const defaultStyles = {
  primary:
    'rounded-full bg-amber-300 px-3 py-1 text-sm uppercase tracking-wider ease-in-out hover:text-amber-50 hover:scale-[1.009] active:scale-[1] dark:text-black',
  secondary:
    'hover:bg-amber-300 border rounded hover:text-amber-50 text-sm hover:border-amber-50 dark:text-white',
  tertiary:
    'rounded-full border-2 px-2 py-1 uppercase text-sm font-semibold tracking-wider',
  quaternary:
    'rounded-full bg-stone-200 px-3 py-1 text-sm uppercase hover:scale-105 active:scale-100 dark:text-black',
  activeSize:
    'rounded-full border-2 px-2 py-1 uppercase text-sm font-semibold border-amber-100 bg-amber-300 text-stone-50 tracking-wider',
  activePage: 'rounded bg-amber-300 text-white hover:text-white',
  dot: 'h-2 w-2 rounded-full',
  circleArrow: 'absolute text-6xl opacity-80 z-10 text-stone-50',
  iconNav: 'text-stone-800 text-2xl hover:text-white',
  quantity: 'text-2xl text-amber-300 hover:scale-110 active:scale-100',
  logOut:
    'rounded-full bg-stone-800 px-5 py-1 text-xs text-amber-300 hover:scale-[1.04] hover:text-amber-50 active:scale-100 uppercase',
};

function Button({
  children,
  type = '',
  className = '',
  onClick,
  disabled = false,
  btnType,
}) {
  return (
    <button
      className={`${
        type ? defaultStyles[type] : ''
      } ${className} transition-all`}
      onClick={onClick}
      type={btnType}
      disabled={disabled}
    >
      {children}
    </button>
  );
}

export default Button;
