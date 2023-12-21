function MenuModalItem({ children, label }) {
  return (
    <div className="tracking-wider">
      <p className="w-[100px] font-semibold capitalize">{label}:</p>
      <span>{children}</span>
    </div>
  );
}

export default MenuModalItem;
