import Link from "next/link";

export default function FinalCTA() {
  return (
    <section className="px-6 py-24 max-w-4xl mx-auto text-center">
      <span className="font-mono text-emerald-400 text-sm">
        {"// ready to start?"}
      </span>
      <h2 className="text-3xl md:text-5xl font-bold mt-4 mb-5 text-white">
        You&apos;ve read enough.
      </h2>
      <p className="text-gray-400 text-lg max-w-xl mx-auto mb-10 leading-relaxed">
        The next step is a free 30-minute conversation. No commitment. No
        payment. Just an honest look at where you are and what&apos;s actually
        possible.
      </p>
      <Link
        href="/booking"
        className="inline-flex items-center justify-center px-10 py-5 bg-emerald-500 hover:bg-emerald-400 text-black font-bold rounded-lg transition-colors text-lg"
      >
        Book your free session →
      </Link>
      <p className="text-gray-600 text-xs font-mono mt-5">
        {"// no credit card · no commitment · pay only after results"}
      </p>
    </section>
  );
}
