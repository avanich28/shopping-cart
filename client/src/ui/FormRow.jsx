const styles = {
  primary: 'capitalize flex flex-col gap-1 font-semibold text-sm',
  secondary:
    'absolute z-10 flex w-full animate-slideD items-center gap-2 bg-stone-800 px-5 py-5',
  tertiary: 'flex gap-2 self-center text-sm',
};

function FormRow({
  children,
  getStyle = 'primary',
  label,
  error,
  hasLabel = true,
  msg,
}) {
  return (
    <div className={styles[getStyle]}>
      {hasLabel && <label htmlFor={children.props.id}>{label}</label>}

      {!hasLabel && msg?.length > 0 && <p>{msg}</p>}
      {children}

      {error && (
        <span className="text-xs font-normal text-red-600">{error}</span>
      )}
    </div>
  );
}

export default FormRow;
