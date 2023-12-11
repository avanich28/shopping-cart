function ImageBox({ src, alt, type, className = '' }) {
  const defaultStyle = {
    primary: 'mb-3 h-32 w-32 overflow-hidden rounded-full',
    secondary: 'h-28 w-28',
    logo: 'h-12 w-12',
    advertise: 'brightness-50',
  };
  return (
    <div
      className={`flex flex-none items-center ${defaultStyle[type]} ${className}`}
    >
      <img className="h-auto w-full" src={src} alt={alt} />
    </div>
  );
}

export default ImageBox;
