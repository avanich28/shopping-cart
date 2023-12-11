function Button({ children, type = '', className = '', onClick }) {
  const defaultStyles = {
    primary:
      'mt-2 rounded-full bg-amber-300 px-3 py-1 text-sm uppercase tracking-wider transition-all ease-in-out hover:scale-105 hover:text-amber-50 active:scale-100',
    secondary: 'transition-all hover:text-amber-300',
    dot: 'h-2 w-2 rounded-full',
    circleArrow: 'absolute text-6xl opacity-80 z-10 text-stone-50',
  };

  return (
    <button
      className={`${type ? defaultStyles[type] : ''} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
