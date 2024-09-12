const stylesOutside = {
  primary: 'flex h-full items-center justify-center dark:text-white',
  secondary:
    'absolute z-10 w-full animate-slideD bg-stone-300 py-5 px-3 dark:bg-stone-950',
};

const stylesInside = {
  primary:
    'flex w-[500px] flex-col gap-5 rounded-lg bg-stone-100 px-4 py-8 dark:bg-stone-950',
  secondary: 'flex justify-between w-full text-sm',
};

function Form({ onSubmit, children, setStyle = 'primary' }) {
  return (
    <div className={stylesOutside[setStyle]}>
      <form onSubmit={onSubmit} className={stylesInside[setStyle]}>
        {children}
      </form>
    </div>
  );
}

export default Form;
