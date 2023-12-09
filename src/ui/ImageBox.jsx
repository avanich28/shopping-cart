function ImageBox({ src, alt, className = '' }) {
  return (
    <div className={`flex flex-none items-center ${className}`}>
      <img className="h-auto w-full" src={src} alt={alt} />
    </div>
  );
}

export default ImageBox;
