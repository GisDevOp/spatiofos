import Link from "next/link";

const variants = {
  primary:
    "bg-[var(--green)] text-white hover:bg-[var(--green-dark)] hover:shadow-[0_4px_14px_rgba(59,191,90,0.35)]",
  outlineWhite:
    "bg-transparent text-white border-[1.5px] border-white/30 hover:border-white/70 hover:bg-white/5",
  dark:
    "bg-[var(--navy)] text-white hover:bg-[var(--navy-mid)] hover:shadow-[var(--shadow-sm)]",
  ghost:
    "bg-transparent text-white/60 border-none px-0 underline font-medium hover:text-white hover:opacity-100",
  link:
    "bg-transparent text-white/70 border-none px-3 py-2 no-underline font-medium hover:text-white hover:bg-white/5",
  outline:
    "bg-transparent text-[var(--navy)] border-[1.5px] border-[#CBD5E0] hover:border-[var(--green)] hover:bg-[var(--green-pale)]",
};

export default function Button({
  href,
  variant = "primary",
  children,
  className = "",
  onClick,
  type = "button",
  disabled = false,
}) {
  const base =
    "inline-flex items-center justify-center gap-[7px] font-medium text-sm font-[family-name:var(--font-body)] px-[22px] py-[11px] rounded-[var(--radius-sm)] transition-all duration-200 active:scale-[0.98] no-underline cursor-pointer focus-ring disabled:opacity-50 disabled:pointer-events-none";
  const classes = `${base} ${variants[variant] || variants.primary} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes} aria-disabled={disabled || undefined}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={classes} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
}
