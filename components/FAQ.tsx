const faqs = [
  {
    q: "Is the first session really free? No hidden catch?",
    a: "Yes, completely free. No credit card, no commitment, no pitch at the end. It's a 30-minute conversation to understand your situation. If I don't think I can genuinely help you, I'll tell you honestly. I'd rather turn you away than waste your time.",
  },
  {
    q: "How does Pay-on-Success actually work?",
    a: "We agree on a clear success target upfront — a specific salary number, a job offer, or a measurable hike. You pay nothing until that target is reached. Once it is, we agree on a fair amount based on the outcome. Everything is built on trust, not contracts.",
  },
  {
    q: "What if I work hard but still don't land the result?",
    a: "Then you don't pay. That's the whole point of the model — my incentive is tied to your outcome, not your time. If the result doesn't come, I don't deserve payment. What I do ask is genuine effort from your side. I can't help someone who isn't committed to showing up.",
  },
  {
    q: "I'm a fresh graduate with no experience. Is this for me?",
    a: "Yes. Some of the engineers I've helped most were fresh graduates who were desperate, confused, and close to giving up. If you're willing to put in the work, your starting point doesn't matter to me.",
  },
  {
    q: "I'm already a mid or senior engineer. Can you still help?",
    a: "Absolutely. Career stagnation doesn't care about your seniority. If you're stuck at the same level, struggling with system design interviews, or losing credibility with western clients, those are exactly the problems I work on.",
  },
  {
    q: "I'm not based in Nepal / Kathmandu. Does that matter?",
    a: "Not at all. Sessions are fully remote over video call. I work with engineers across Nepal and the Nepali diaspora regardless of location.",
  },
  {
    q: "How many sessions will I need?",
    a: "It depends on where you are and where you want to go. Some people need 3-4 focused sessions. Others work with me over several months. We figure this out together after the first session once I understand your specific situation.",
  },
  {
    q: "What if my English isn't strong?",
    a: "Fluency in English is not required for effective communication — and I'm living proof. I'm not a proficient English speaker myself, yet I work daily with western teams at one of the top 10 tech companies in the world. The distinction that matters is this: fluency means sounding native, effectiveness means being understood and getting things done. You don't need the former to achieve the latter. We can speak in Nepali whenever it helps us move faster. The goal is your progress, not your performance in front of me.",
  },
];

export default function FAQ() {
  return (
    <section className="px-6 py-24 max-w-4xl mx-auto">
      <div className="mb-12">
        <span className="font-mono text-emerald-400 text-sm">
          {"// faq"}
        </span>
        <h2 className="text-3xl md:text-4xl font-bold mt-2 text-white">
          Questions you&apos;re afraid
          <br />
          to ask.
        </h2>
      </div>

      <div className="flex flex-col gap-3">
        {faqs.map((faq) => (
          <details
            key={faq.q}
            className="group border border-gray-800 rounded-xl bg-gray-900/40 hover:border-gray-700 transition-colors"
          >
            <summary className="flex items-center justify-between gap-4 px-6 py-5 cursor-pointer list-none text-white font-medium select-none">
              <span>{faq.q}</span>
              <span className="flex-shrink-0 font-mono text-emerald-400 text-lg transition-transform group-open:rotate-45">
                +
              </span>
            </summary>
            <div className="px-6 pb-5 text-gray-400 leading-relaxed text-sm border-t border-gray-800 pt-4">
              {faq.a}
            </div>
          </details>
        ))}
      </div>
    </section>
  );
}
