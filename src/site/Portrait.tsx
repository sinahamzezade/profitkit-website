import Image from "next/image";

/*
  Square, not circular. The previous Face component used rounded-full, which
  MASTER.md rejects — radius is 0 everywhere on marketing, portraits included.

  `fill` inside a fixed-ratio box avoids hardcoding intrinsic dimensions for
  assets whose sizes we do not control.
*/
export function Portrait({
  src,
  alt,
  className = "",
}: {
  src: string;
  alt: string;
  className?: string;
}) {
  return (
    <span
      className={`relative block overflow-hidden bg-paper-deep ${className}`}
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes="112px"
        className="object-cover grayscale contrast-[1.05]"
      />
    </span>
  );
}
