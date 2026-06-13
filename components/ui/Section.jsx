export default function Section({
  id,
  variant = "default",
  children,
  className = "",
  ariaLabel,
}) {
  const variants = {
    default: "bg-white",
    dark: "section--dark",
    light: "section--light",
    green: "section--green",
  };

  return (
    <section
      id={id}
      className={`section ${variants[variant] || ""} ${className}`}
      aria-label={ariaLabel}
    >
      <div className="container">{children}</div>
    </section>
  );
}
