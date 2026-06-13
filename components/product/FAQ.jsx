import { roofFaq } from "@/lib/content";

export default function FAQ() {
  return (
    <div className="space-y-4 max-w-2xl">
      {roofFaq.map((item) => (
        <details
          key={item.q}
          className="bg-white border border-[#E2EAF3] rounded-[var(--radius-md)] p-5 group"
        >
          <summary className="font-semibold text-sm text-[var(--navy)] cursor-pointer list-none flex justify-between items-center">
            {item.q}
            <span className="text-[var(--green)] text-lg group-open:rotate-45 transition-transform">
              +
            </span>
          </summary>
          <p className="text-[13px] text-[var(--slate)] mt-3 leading-relaxed">
            {item.a}
          </p>
        </details>
      ))}
    </div>
  );
}
