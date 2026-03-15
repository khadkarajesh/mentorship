import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="min-h-[88vh] flex flex-col justify-center px-6 py-24 max-w-4xl mx-auto">
{/* Photo + headline row */}
      <div className="flex flex-col-reverse md:flex-row md:items-center md:justify-between gap-8 mb-6">
        <h1 className="text-4xl md:text-5xl font-bold leading-tight tracking-tight text-white">
          100 rejections. No Ivy League.
          <br />
          <span className="text-emerald-400">Now at Synopsys.</span>
        </h1>

        <div className="flex-shrink-0">
          <div className="relative w-28 h-28 md:w-36 md:h-36 rounded-full overflow-hidden border-2 border-emerald-400/40 ring-4 ring-emerald-400/10">
            <Image
              src="/rajesh.jpeg"
              alt="Rajesh Khadka — Senior Software Engineer at Synopsys"
              fill
              className="object-cover"
              priority
            />
          </div>
          <p className="text-xs font-mono text-gray-500 mt-2 text-center">
            Rajesh Khadka
          </p>
          <p className="text-xs font-mono text-emerald-400/70 text-center">
            Senior SWE @ Synopsys
          </p>
        </div>
      </div>

      <p className="text-lg md:text-xl text-gray-400 max-w-2xl mb-4 leading-relaxed">
        You know that feeling. One rejection and the spiral starts —
        <span className="text-gray-300 italic"> &quot;I&apos;m not smart enough. I chose the wrong profession. I can&apos;t do this.&quot;</span>{" "}
        The label sticks. You stop seeing what you did well. You only feel
        the weight of what you didn&apos;t. I lived that loop — alone, with no
        one to interrupt the narrative.
      </p>

      <p className="text-lg md:text-xl text-gray-300 max-w-2xl mb-4 leading-relaxed">
        Most mentors teach from the summit. I learned on the climb. I worked
        with engineers at outsourcing firms, colleges, and bootcamps in Nepal
        long before Synopsys. Then moved to Paris and spent months in the same
        rejection spiral I&apos;m describing. I&apos;ve seen every version of stuck —
        the fresh graduate paralyzed by rejection, the mid-level engineer
        invisible to management, the outsourcing developer nobody believes in.
        That&apos;s not a backstory. That&apos;s why when you tell me what&apos;s happening,
        I already know what&apos;s actually happening — and what to do next.
      </p>

      <p className="text-lg md:text-xl text-gray-300 max-w-2xl mb-10 leading-relaxed">
        Every single time, the real problem wasn&apos;t what they thought it was.
        I&apos;ll find yours. And I&apos;ll help you move past it.
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
