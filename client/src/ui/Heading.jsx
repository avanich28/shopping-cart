function Heading({ type, children, className = '' }) {
  const defaultStyles = {
    primary: 'text-2xl font-bold uppercase tracking-widest text-red-700',
    secondary: 'font-semibold tracking-wider capitalize',
    logo: 'font-mansalva text-3xl uppercase self-center',
    title:
      'mb-3 text-2xl md:text-5xl font-bold uppercase leading-snug tracking-wider',
  };

  return <h1 className={`${defaultStyles[type]} ${className}`}>{children}</h1>;
}

export default Heading;
