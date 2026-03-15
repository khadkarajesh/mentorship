import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center px-6 py-24 max-w-4xl mx-auto">
      {/* Status badge */}
      <div className="mb-8 inline-flex items-center gap-2 text-sm font-mono text-emerald-400 bg-emerald-400/10 border border-emerald-400/20 rounded px-3 py-1.5 w-fit">
        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
        available for mentorship sessions
      </div>

      {/* Photo + headline row */}
      <div className="flex flex-col-reverse md:flex-row md:items-center md:justify-between gap-8 mb-6">
        <h1 className="text-4xl md:text-5xl font-bold leading-tight tracking-tight text-white">
          After 100+ rejections, I still made it
          <br />
          <span className="text-emerald-400">to a top-10 tech company.</span>
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
        You know the feeling. One rejection and the spiral starts —
        <span className="text-gray-300 italic"> &quot;I&apos;m not smart enough. I chose the wrong profession. I can&apos;t do this.&quot;</span>{" "}
        That label sticks. You stop seeing what you actually did well. I lived
        that loop. Over 100 times. Not Ivy League. Not elite. Just someone
        grinding alone in the dark, skipping weekends, missing family
        functions — with no one pointing the right direction.
      </p>

      <p className="text-lg md:text-xl text-gray-300 max-w-2xl mb-4 leading-relaxed">
        I broke through. I&apos;m now a Senior Software Engineer at Synopsys —
        one of the top 10 tech companies in the world. Over 12 years, I&apos;ve
        mentored 50+ engineers directly and run 100+ free sessions, including
        people who were days away from quitting tech entirely.
      </p>

      <p className="text-lg md:text-xl text-gray-300 max-w-2xl mb-10 leading-relaxed">
        You don&apos;t have to take the road I took. I&apos;ll study your learning
        pattern, understand what breaks you, and build a personalized plan
        that starts showing results. No AI-generated advice. No generic
        roadmaps. Just 12 years of hard-earned experience from someone who
        has been exactly where you are.
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
