import Link from "next/link";

const variants = {
  primary: "bg-[var(--green)] text-white hover:opacity-90",
  outlineWhite:
    "bg-transparent text-white border-[1.5px] border-white/30 hover:border-white/70",
  dark: "bg-[var(--navy)] text-white hover:opacity-90",
  ghost:
    "bg-transparent text-white/60 border-none px-0 underline font-medium hover:opacity-80",
  outline:
    "bg-transparent text-[var(--navy)] border-[1.5px] border-[#CBD5E0] hover:opacity-90",
};

export default function Button({
  href,
  variant = "primary",
  children,
  className = "",
  onClick,
  type = "button",
}) {
  const base =
    "inline-flex items-center gap-[7px] font-medium text-sm font-[family-name:var(--font-body)] px-[22px] py-[11px] rounded-[var(--radius-sm)] transition-opacity active:scale-[0.98] no-underline cursor-pointer";
  const classes = `${base} ${variants[variant] || variants.primary} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={classes} onClick={onClick}>
      {children}
    </button>
  );
}
