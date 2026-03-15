import Link from "next/link";

const forYou = [
  "You're grinding at an outsourcing firm and know you're capable of more, but don't know how to break out.",
  "You're a fresh graduate who has been rejected multiple times and is starting to question whether this career is right for you.",
  "You've been at the same level for years and your yearly review feels like a performance designed to justify not giving you a raise.",
  "You're technically solid but struggle to communicate with western clients or senior stakeholders.",
  "You've been close to quitting — not because you lack ability, but because you lack direction.",
  "You're willing to put in real effort outside of sessions and want honest feedback, not reassurance.",
];

const notForYou = [
  "You're looking for a shortcut or a quick fix. There isn't one here.",
  "You want someone to validate your excuses instead of helping you move past them.",
  "You're not open to direct feedback. I won't sugarcoat what I see.",
  "You're not willing to commit time outside our sessions. Accountability only works if you show up.",
];

export default function WhoIsItFor() {
  return (
    <section className="px-6 py-24 max-w-4xl mx-auto">
      <div className="mb-12">
        <span className="font-mono text-emerald-400 text-sm">
          {"// who this is for"}
        </span>
        <h2 className="text-3xl md:text-4xl font-bold mt-2 text-white">
          Read this before
          <br />
          you book.
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* For you */}
        <div>
          <h3 className="font-mono text-emerald-400 text-sm mb-5 flex items-center gap-2">
            <span className="text-emerald-400">✓</span> This is for you if...
          </h3>
          <ul className="flex flex-col gap-4">
            {forYou.map((item) => (
              <li key={item} className="flex gap-3 text-sm text-gray-300 leading-relaxed">
                <span className="text-emerald-400 mt-0.5 flex-shrink-0">→</span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Not for you */}
        <div>
          <h3 className="font-mono text-red-400/80 text-sm mb-5 flex items-center gap-2">
            <span>✕</span> This is NOT for you if...
          </h3>
          <ul className="flex flex-col gap-4">
            {notForYou.map((item) => (
              <li key={item} className="flex gap-3 text-sm text-gray-500 leading-relaxed">
                <span className="text-red-400/60 mt-0.5 flex-shrink-0">→</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-14 border border-emerald-400/20 bg-emerald-400/5 rounded-xl p-6 text-center">
        <p className="text-gray-300 mb-1">
          If you read the left column and felt seen —
        </p>
        <p className="text-white font-semibold text-lg">
          that&apos;s exactly why this exists.
        </p>
      </div>
    </section>
  );
}
