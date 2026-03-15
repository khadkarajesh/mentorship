const posts = [
  {
    title: "From Remote Nepal to a Global Tech Company",
    description:
      "Not the smartest. No elite degree. Just patience, perseverance, and years of effort in the dark. The full story of how I got here — and what it actually took.",
    url: "https://reflectivedev.com/p/from-remote-nepal-to-a-global-tech",
    tag: "My story",
  },
  {
    title: "Same Words, Different Meaning",
    description:
      "When a western client says \"this is not good enough\", they mean fix it and move on. When a Nepali developer hears it, it feels like a personal attack. This gap is costing you more than you think.",
    url: "https://reflectivedev.com/p/same-words-different-meaning",
    tag: "Communication",
  },
  {
    title: "How Can We Take Feedback Constructively?",
    description:
      "For years I heard feedback as a personal attack and went defensive. Learning to separate emotions from feedback was the single shift that unlocked my growth. Here's how to make that shift.",
    url: "https://reflectivedev.com/p/how-can-we-take-feedback-constructively",
    tag: "Mindset",
  },
];

export default function BlogPreview() {
  return (
    <section className="px-6 py-24 max-w-4xl mx-auto">
      <div className="mb-12">
        <span className="font-mono text-emerald-400 text-sm">
          {"// from the blog"}
        </span>
        <h2 className="text-3xl md:text-4xl font-bold mt-2 text-white">
          Read how I think
          <br />
          before you book.
        </h2>
        <p className="text-gray-400 mt-3 max-w-xl">
          I write weekly on{" "}
          <a
            href="https://reflectivedev.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-emerald-400 hover:text-emerald-300 transition-colors"
          >
            Reflective Dev
          </a>
          . These three posts are the best window into how I mentor.
        </p>
      </div>

      <div className="flex flex-col gap-4">
        {posts.map((post) => (
          <a
            key={post.title}
            href={post.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col sm:flex-row sm:items-center justify-between gap-4 border border-gray-800 bg-gray-900/40 hover:border-emerald-400/40 hover:bg-gray-900/70 rounded-xl p-6 transition-all"
          >
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-xs font-mono text-emerald-400 bg-emerald-400/10 border border-emerald-400/20 px-2 py-0.5 rounded">
                  {post.tag}
                </span>
              </div>
              <h3 className="text-white font-semibold text-lg mb-1 group-hover:text-emerald-400 transition-colors">
                {post.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {post.description}
              </p>
            </div>
            <div className="flex-shrink-0 text-gray-600 group-hover:text-emerald-400 transition-colors text-xl">
              →
            </div>
          </a>
        ))}
      </div>

      <div className="mt-8 text-center">
        <a
          href="https://reflectivedev.com"
          target="_blank"
          rel="noopener noreferrer"
          className="font-mono text-sm text-gray-500 hover:text-emerald-400 transition-colors"
        >
          Read all posts on Reflective Dev →
        </a>
      </div>
    </section>
  );
}
