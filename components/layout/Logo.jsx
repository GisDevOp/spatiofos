import Image from "next/image";
import Link from "next/link";
import logoImage from "./SpatioFos Logo.png";

export default function Logo({ showWordmark = true, className = "" }) {
  return (
    <Link
      href="/"
      className={`flex items-center gap-2.5 no-underline ${className}`}
      aria-label="SpatioFos home"
    >
      <Image
        src={logoImage}
        alt=""
        width={logoImage.width}
        height={logoImage.height}
        className="h-8 w-auto"
        priority
        aria-hidden="true"
      />
      {showWordmark && (
        <span className="font-display font-bold text-[19px] text-white tracking-tight">
          Spatio<span className="text-[var(--green)]">Fos</span>
        </span>
      )}
    </Link>
  );
}
