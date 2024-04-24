function Hyperlink({ children, type = '', href = '/' }) {
  const styles = {
    footer: 'transition-all ease-in-out hover:text-amber-300',
    gitHub:
      'transition-all ease-in-out hover:text-amber-300 flex flex-col gap-2 items-center',
    auth: 'font-semibold underline underline-offset-1 hover:text-amber-400',
  };
  return (
    <a href={href} className={styles[type]}>
      {children}
    </a>
  );
}

export default Hyperlink;
