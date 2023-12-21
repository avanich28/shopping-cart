function Button({
  children,
  type = '',
  className = '',
  onClick,
  disabled = false,
  btnType = '',
}) {
  const defaultStyles = {
    primary:
      'rounded-full bg-amber-300 px-3 py-1 text-sm uppercase tracking-wider ease-in-out hover:scale-105 hover:text-amber-50 active:scale-100',
    secondary: 'hover:text-amber-300',
    tertiary:
      'rounded-full border-2 px-2 py-1 uppercase text-sm font-semibold tracking-wider',
    quaternary:
      'rounded-full bg-stone-200 px-3 py-1 text-sm uppercase hover:scale-105 active:scale-100',
    activeSize:
      'rounded-full border-2 px-2 py-1 uppercase text-sm font-semibold border-amber-100 bg-amber-300 text-stone-50 tracking-wider',
    activePage: 'rounded-full bg-amber-300 text-white hover:text-white',
    dot: 'h-2 w-2 rounded-full',
    circleArrow: 'absolute text-6xl opacity-80 z-10 text-stone-50',
    iconNav: 'text-stone-800 hover:text-amber-50 text-2xl',
    quantity: 'text-2xl text-amber-300 hover:scale-110 active:scale-100',
  };

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
