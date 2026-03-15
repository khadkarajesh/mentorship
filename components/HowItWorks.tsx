import Link from "next/link";

const steps = [
  {
    step: "01",
    title: "Book a free session",
    description:
      "Pick a time that works for you. No preparation needed. The intake questions you answer at booking help me understand your situation before we even meet — so we don't waste the 30 minutes on basics.",
  },
  {
    step: "02",
    title: "Honest diagnosis, no pitch",
    description:
      "We talk. I listen. I ask hard questions. By the end of the session you'll have a clear picture of what's actually blocking you — not a generic answer, but specific to your situation, your company, your stack. If I don't think I can genuinely help, I'll tell you that too.",
  },
  {
    step: "03",
    title: "A plan built around you",
    description:
      "If we decide to work together, I build a personalized execution plan around how you learn and what motivates you. We work in iterations — each one bringing a measurable result. And the Pay-on-Success model means you only pay after landing a better job or a significant hike. No result, no payment.",
  },
];

export default function HowItWorks() {
  return (
    <section className="px-6 py-24 max-w-4xl mx-auto">
      <div className="mb-12">
        <span className="font-mono text-emerald-400 text-sm">
          {"// how it works"}
        </span>
        <h2 className="text-3xl md:text-4xl font-bold mt-2 text-white">
          What actually happens
          <br />
          after you book.
        </h2>
      </div>

      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-6 top-0 bottom-0 w-px bg-gray-800 hidden md:block" />

        <div className="flex flex-col gap-10">
          {steps.map((s) => (
            <div key={s.step} className="flex gap-8 md:gap-12 items-start">
              {/* Step number */}
              <div className="flex-shrink-0 w-12 h-12 rounded-full border border-emerald-400/40 bg-emerald-400/5 flex items-center justify-center font-mono text-emerald-400 text-sm font-bold z-10">
                {s.step}
              </div>

              {/* Content */}
              <div className="pt-2 pb-2">
                <h3 className="text-white font-bold text-xl mb-2">
                  {s.title}
                </h3>
                <p className="text-gray-400 leading-relaxed max-w-xl">
                  {s.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Pay on success callout */}
      <div className="mt-14 border border-gray-800 rounded-xl p-6 bg-gray-900/30">
        <p className="font-mono text-sm text-emerald-400 mb-1">
          {"// on payment"}
        </p>
        <p className="text-gray-300 leading-relaxed">
          Pay-on-Success means exactly that.{" "}
          <span className="text-white font-medium">
            You pay only after you land a better job or receive a significant
            salary hike.
          </span>{" "}
          If you don&apos;t get results, you don&apos;t owe me anything. The first
          session is always free — no card required, no commitment.
        </p>
      </div>

    </section>
  );
}
