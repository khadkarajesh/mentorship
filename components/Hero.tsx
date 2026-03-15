import Link from "next/link";

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center px-6 py-24 max-w-4xl mx-auto">
      {/* Status badge */}
      <div className="mb-8 inline-flex items-center gap-2 text-sm font-mono text-emerald-400 bg-emerald-400/10 border border-emerald-400/20 rounded px-3 py-1.5 w-fit">
        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
        available for mentorship sessions
      </div>

      <h1 className="text-4xl md:text-6xl font-bold leading-tight tracking-tight mb-6 text-white">
        Stop guessing your
        <br />
        <span className="text-emerald-400">career moves.</span>
      </h1>

      <p className="text-lg md:text-xl text-gray-400 max-w-2xl mb-4 leading-relaxed">
        I&apos;m a software engineer based in Europe, originally from Nepal. I work
        with western teams daily — I know exactly what separates engineers who
        grow from those who stay stuck.
      </p>

      <p className="text-lg md:text-xl text-gray-300 max-w-2xl mb-10 leading-relaxed">
        Whether you&apos;re grinding at an outsourcing firm, chasing your first job,
        or sick of yearly reviews that are just excuses to not raise your
        salary — I&apos;ve seen this pattern. Let&apos;s break it.
      </p>

      {/* USP block */}
      <div className="border border-emerald-400/30 bg-emerald-400/5 rounded-lg p-5 mb-10 max-w-xl font-mono text-sm leading-7">
        <div>
          <span className="text-emerald-400">const</span>
          <span className="text-white"> model</span>
          <span className="text-gray-500"> = </span>
          <span className="text-yellow-300">&quot;Pay-on-Success&quot;</span>
          <span className="text-gray-500">;</span>
        </div>
        <div className="text-gray-500">
          {"// You only pay after landing a better job or a hike."}
        </div>
        <div className="text-gray-500">
          {"// First session is free. Nothing to lose."}
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-4">
        <Link
          href="/booking"
          className="inline-flex items-center justify-center px-8 py-4 bg-emerald-500 hover:bg-emerald-400 text-black font-semibold rounded-lg transition-colors text-base"
        >
          Book a free session →
        </Link>
        <a
          href="#services"
          className="inline-flex items-center justify-center px-8 py-4 border border-gray-700 hover:border-gray-500 text-gray-300 hover:text-white font-semibold rounded-lg transition-colors text-base"
        >
          See what I offer
        </a>
      </div>
    </section>
  );
}
