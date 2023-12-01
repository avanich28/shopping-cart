function ImageBox({ src, alt }) {
  return (
    <div className="flex flex-none items-center">
      <img
        className="h-auto w-full "
        src={`../../../public/${src}`}
        alt={alt}
      />
    </div>
  );
}

export default ImageBox;
