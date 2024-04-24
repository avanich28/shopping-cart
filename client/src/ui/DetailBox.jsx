function DetailBox({ children, type, bgColor, className = '' }) {
  const defaultStyles = {
    primary:
      'rounded-lg px-2 py-1 text-sm font-bold uppercase tracking-wide text-stone-50',
  };
  return (
    <div className={`${defaultStyles[type]} ${bgColor} ${className}`}>
      {children}
    </div>
  );
}

export default DetailBox;
