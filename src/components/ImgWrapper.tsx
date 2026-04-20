interface ImgWrapperProps {
  imgLink: string;
  alt: string;
}

export default function ImgWrapper({ imgLink, alt }: ImgWrapperProps) {
  return (
    <div className="relative h-100 rounded-lg overflow-hidden md:h-auto md:rounded-2xl">
      <img
        src={imgLink}
        alt={alt}
        className="absolute inset-0 object-cover w-full h-full"
      />
    </div>
  );
}
