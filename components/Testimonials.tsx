const testimonials = [
  {
    quote:
      "This is a really thoughtful post, Rajesh dai. It took me right back to when I was just starting my career. You explained things so well, and it's a testament to your teaching that I still use practices you showed me to this day. It truly was an awesome experience learning from you. Thank you.",
    name: "Neha Pandey",
    role: "Senior Software Engineer, Global Staffing Support",
    linkedin: "https://www.linkedin.com/in/neha-pandey-dev/",
  },
  {
    quote:
      "You are doing god's work dai. I am glad to have connected with you and had our call that gave me motivation to keep going in a foreign country. I would 100% recommend anyone in the tech industry to connect with you and learn from your experiences and perspectives.",
    name: "Pratik Manandhar",
    role: "Masters Student, Germany",
    linkedin: "https://www.linkedin.com/in/pratik-manandhar/",
  },
  {
    quote:
      "I remember asking you beginner questions and you never made me feel small for it. Thanks a lot Rajesh dai.",
    name: "Suraj Gautam",
    role: "Sr. Software Engineer, American Airlines",
    linkedin: "https://www.linkedin.com/in/gautamsuraj/",
  },
  {
    quote:
      "Had a great opportunity to work with Rajesh dai and can definitely say an interaction with him does help greatly.",
    name: "Aliz Acharya",
    role: "Software Engineer, Jeeves",
    linkedin: "https://www.linkedin.com/in/aliz-acharya/",
  },
];

export default function Testimonials() {
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

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {testimonials.map((t) => (
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
              <div className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center flex-shrink-0">
                <svg
                  className="w-3.5 h-3.5 text-gray-400"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
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
    </section>
  );
}
