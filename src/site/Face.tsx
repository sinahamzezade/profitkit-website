import Image from "next/image";

type FaceProps = {
  src: string;
  alt: string;
  size?: number;
  className?: string;
};

export function Face({ src, alt, size = 32, className = "" }: FaceProps) {
  return (
    <Image
      src={src}
      alt={alt}
      width={size}
      height={size}
      className={`rounded-full object-cover ${className}`}
    />
  );
}
