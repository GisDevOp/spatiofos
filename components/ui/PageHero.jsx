export default function PageHero({ label, title, subtitle, children, dark = false }) {
  return (
    <div
      className={`relative overflow-hidden pt-24 pb-14 md:pt-28 md:pb-16 ${
        dark ? "bg-[var(--navy-deep)] text-white" : "bg-[var(--offwhite)]"
      }`}
    >
      {dark && (
        <div
          className="absolute inset-0 pointer-events-none opacity-60"
          style={{
            backgroundImage:
              "linear-gradient(rgba(59,191,90,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(59,191,90,0.05) 1px, transparent 1px)",
            backgroundSize: "44px 44px",
          }}
          aria-hidden="true"
        />
      )}
      <div className="container relative animate-fade-up">
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
            className={`section-sub ${dark ? "section-sub--light" : ""} mt-3 max-w-xl`}
          >
            {subtitle}
          </p>
        )}
        {children}
      </div>
    </div>
  );
}
