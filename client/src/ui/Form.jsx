const stylesOutside = {
  primary: 'flex h-full items-center justify-center',
  secondary: 'absolute z-10 w-full animate-slideD bg-stone-300 py-5 px-3',
};

const stylesInside = {
  primary: 'flex w-[500px] flex-col gap-5 rounded-lg bg-stone-100 px-4 py-8',
  secondary: 'flex justify-between w-full text-sm',
};

function Form({ onSubmit, handleSubmit, children, setStyle = 'primary' }) {
  return (
    <div className={stylesOutside[setStyle]}>
      <form
        onSubmit={handleSubmit && handleSubmit(onSubmit)}
        className={stylesInside[setStyle]}
      >
        {children}
      </form>
    </div>
  );
}

export default Form;
