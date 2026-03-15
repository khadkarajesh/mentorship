import Link from "next/link";

const services = [
  {
    icon: "⚙️",
    title: "System Design",
    subtitle: "Interview Preparation",
    description:
      "Most Nepali engineers freeze at system design rounds. We'll work through real distributed systems problems, scalability trade-offs, and how to articulate your thinking clearly to senior engineers who expect it.",
    tag: "High impact",
  },
  {
    icon: "🌍",
    title: "Western Client Communication",
    subtitle: "Speak their language",
    description:
      "There's a specific way western teams communicate — directness, async writing, owning your decisions. I'll show you how to build credibility fast and stop being treated as 'just the dev team'.",
    tag: "Underrated skill",
  },
  {
    icon: "💻",
    title: "Interview Prep",
    subtitle: "Mock Coding Tests",
    description:
      "Live mock interviews with real, honest feedback. Not just 'did you solve it' — but how you think, how you communicate under pressure, and how to handle the parts you don't know.",
    tag: "Practice-based",
  },
  {
    icon: "📈",
    title: "Career Growth",
    subtitle: "Your roadmap, not a template",
    description:
      "Tired of the same 'work harder' advice? We'll map your specific situation — your company, your stack, your goals — and build a concrete plan to get you to the next level.",
    tag: "Personalized",
  },
];

export default function Services() {
  return (
    <section id="services" className="px-6 py-24 max-w-4xl mx-auto">
      <div className="mb-12">
        <span className="font-mono text-emerald-400 text-sm">
          {"// what I offer"}
        </span>
        <h2 className="text-3xl md:text-4xl font-bold mt-2 text-white">
          Four areas where I can
          <br />
          actually move the needle.
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {services.map((service) => (
          <div
            key={service.title}
            className="border border-gray-800 bg-gray-900/40 rounded-xl p-6 hover:border-emerald-400/40 hover:bg-gray-900/70 transition-all"
          >
            <div className="flex items-start justify-between mb-4">
              <span className="text-2xl">{service.icon}</span>
              <span className="text-xs font-mono text-emerald-400 bg-emerald-400/10 border border-emerald-400/20 px-2 py-1 rounded">
                {service.tag}
              </span>
            </div>
            <h3 className="text-xl font-bold text-white mb-1">
              {service.title}
            </h3>
            <p className="text-emerald-400/80 text-sm font-mono mb-3">
              {service.subtitle}
            </p>
            <p className="text-gray-400 text-sm leading-relaxed">
              {service.description}
            </p>
          </div>
        ))}
      </div>

      <p className="mt-10 text-center text-gray-500 text-sm">
        Not sure which area to start with?{" "}
        <Link href="/booking" className="text-emerald-400 hover:text-emerald-300 transition-colors">
          That&apos;s what the first session is for →
        </Link>
      </p>
    </section>
  );
}
