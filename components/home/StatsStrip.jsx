import { stats } from "@/lib/content";

export default function StatsStrip() {
  return (
    <section
      className="bg-[var(--green-pale)] border-b border-[var(--green-mid)] py-7"
      aria-label="Key statistics"
    >
      <div className="container">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-0 md:divide-x md:divide-[var(--green-mid)] text-center">
          {stats.map((stat) => (
            <div key={stat.label} className="px-2 md:px-4">
              <div className="font-display text-[28px] font-bold text-[var(--green-dark)]">
                {stat.value}
              </div>
              <div className="text-xs text-[var(--slate)] mt-0.5 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
