const styles = {
  primary:
    'w-full rounded-full px-3 py-1 font-medium outline-none focus:ring focus:ring-amber-300 dark:bg-stone-700 dark:text-white',
};

function Input({
  type,
  id,
  placeholder = '',
  register,
  data = {},
  setStyle = 'primary',
  isAuth = true,
  value,
  onChange,
  onKeyDown,
}) {
  return (
    <>
      {isAuth ? (
        <input
          className={styles[setStyle]}
          type={type}
          id={id}
          placeholder={placeholder}
          {...register(id, data)}
        />
      ) : (
        <input
          className={styles[setStyle]}
          id={id}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          onKeyDown={onKeyDown}
        />
      )}
    </>
  );
}

export default Input;
