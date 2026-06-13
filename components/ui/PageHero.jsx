export default function PageHero({ label, title, subtitle, children, dark = false }) {
  return (
    <div
      className={`pt-28 pb-16 ${dark ? "bg-[var(--navy-deep)] text-white" : "bg-[var(--offwhite)]"}`}
    >
      <div className="container">
        {label && (
          <p className={`label ${dark ? "label--light" : ""}`}>{label}</p>
        )}
        <h1
          className={`section-title ${dark ? "section-title--light" : ""} max-w-2xl`}
        >
          {title}
        </h1>
        {subtitle && (
          <p
            className={`section-sub ${dark ? "section-sub--light" : ""} mt-3`}
          >
            {subtitle}
          </p>
        )}
        {children}
      </div>
    </div>
  );
}
