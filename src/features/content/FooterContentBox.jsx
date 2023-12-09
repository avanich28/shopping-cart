function FooterContentBox({ label, children, className = '' }) {
  return (
    <section className={`flex flex-col gap-5`}>
      <h2 className="text-lg font-semibold">{label}</h2>
      <div className={`flex flex-wrap gap-4 ${className}`}>{children}</div>
    </section>
  );
}

export default FooterContentBox;
