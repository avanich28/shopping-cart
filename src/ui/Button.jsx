function Button({
  children,
  type = '',
  className = '',
  onClick,
  btnType = '',
}) {
  const defaultStyles = {
    primary:
      'rounded-full bg-amber-300 px-3 py-1 text-sm uppercase tracking-wider ease-in-out hover:scale-105 hover:text-amber-50 active:scale-100',
    secondary: 'hover:text-amber-300',
    dot: 'h-2 w-2 rounded-full',
    circleArrow: 'absolute text-6xl opacity-80 z-10 text-stone-50',
    iconNav: 'text-stone-800 hover:text-amber-50 text-2xl',
  };

  return (
    <button
      className={`${
        type ? defaultStyles[type] : ''
      } ${className} transition-all`}
      onClick={onClick}
      type={btnType}
    >
      {children}
    </button>
  );
}

export default Button;
