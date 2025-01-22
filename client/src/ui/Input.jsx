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
  isFormHook = true,
  defaultValue = '',
  disabled,
  value,
  onChange,
  onKeyDown,
}) {
  return (
    <>
      {isFormHook ? (
        <input
          className={styles[setStyle]}
          id={id}
          type={type}
          defaultValue={defaultValue}
          disabled={disabled}
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
