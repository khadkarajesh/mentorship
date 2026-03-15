const testimonials = [
  {
    quote:
      "This is a really thoughtful post, Rajesh dai. It took me right back to when I was just starting my career. You explained things so well, and it's a testament to your teaching that I still use practices you showed me to this day. It truly was an awesome experience learning from you. Thank you.",
    name: "Neha Pandey",
    role: "Senior Software Engineer, Global Staffing Support",
    linkedin: "https://www.linkedin.com/in/neha-pandey-dev/",
    initial: "N",
    color: "bg-blue-500/20 text-blue-400",
    featured: true,
  },
  {
    quote:
      "You are doing god's work dai. I am glad to have connected with you and had our call that gave me motivation to keep going in a foreign country. I would 100% recommend anyone in the tech industry to connect with you and learn from your experiences and perspectives.",
    name: "Pratik Manandhar",
    role: "Masters Student, Germany",
    linkedin: "https://www.linkedin.com/in/pratik-manandhar/",
    initial: "P",
    color: "bg-purple-500/20 text-purple-400",
    featured: false,
  },
  {
    quote:
      "I remember asking you beginner questions and you never made me feel small for it. Thanks a lot Rajesh dai.",
    name: "Suraj Gautam",
    role: "Sr. Software Engineer, American Airlines",
    linkedin: "https://www.linkedin.com/in/gautamsuraj/",
    initial: "S",
    color: "bg-orange-500/20 text-orange-400",
    featured: false,
  },
  {
    quote:
      "Had a great opportunity to work with Rajesh dai and can definitely say an interaction with him does help greatly.",
    name: "Aliz Acharya",
    role: "Software Engineer, Jeeves",
    linkedin: "https://www.linkedin.com/in/aliz-acharya/",
    initial: "A",
    color: "bg-teal-500/20 text-teal-400",
    featured: false,
  },
];

export default function Testimonials() {
  const featured = testimonials.find((t) => t.featured);
  const rest = testimonials.filter((t) => !t.featured);

  return (
    <section className="px-6 py-24 max-w-4xl mx-auto">
      <div className="mb-12">
        <span className="font-mono text-emerald-400 text-sm">
          {"// what mentees say"}
        </span>
        <h2 className="text-3xl md:text-4xl font-bold mt-2 text-white">
          Don&apos;t take my word
          <br />
          for it.
        </h2>
      </div>

      <div className="flex flex-col gap-5">
        {/* Featured testimonial — full width */}
        {featured && (
          <div className="border border-emerald-400/20 bg-emerald-400/5 rounded-xl p-8">
            <p className="text-gray-200 leading-relaxed text-base md:text-lg mb-6">
              &ldquo;{featured.quote}&rdquo;
            </p>
            <a
              href={featured.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 group w-fit"
            >
              <div className={`w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0 font-semibold text-sm ${featured.color}`}>
                {featured.initial}
              </div>
              <div>
                <p className="text-white text-sm font-medium group-hover:text-emerald-400 transition-colors">
                  {featured.name}
                </p>
                <p className="text-gray-500 text-xs">{featured.role}</p>
              </div>
            </a>
          </div>
        )}

        {/* Remaining testimonials — 3-column grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {rest.map((t) => (
            <div
              key={t.name}
              className="border border-gray-800 bg-gray-900/40 rounded-xl p-6 flex flex-col justify-between gap-6"
            >
              <p className="text-gray-300 leading-relaxed text-sm">
                &ldquo;{t.quote}&rdquo;
              </p>
              <a
                href={t.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 group w-fit"
              >
                <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 font-semibold text-xs ${t.color}`}>
                  {t.initial}
                </div>
                <div>
                  <p className="text-white text-sm font-medium group-hover:text-emerald-400 transition-colors">
                    {t.name}
                  </p>
                  <p className="text-gray-500 text-xs">{t.role}</p>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
