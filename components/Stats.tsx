const stats = [
  { value: "12+", label: "Years of experience" },
  { value: "50+", label: "Engineers mentored" },
  { value: "100+", label: "Free sessions given" },
  { value: "Top 10", label: "Synopsys · global tech" },
];

export default function Stats() {
  return (
    <section className="border-y border-gray-800 bg-gray-900/20">
      <div className="max-w-4xl mx-auto px-6 py-12 grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((s) => (
          <div key={s.label} className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-emerald-400 font-mono mb-1">
              {s.value}
            </div>
            <div className="text-sm text-gray-400">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
