"use client";

import Link from "next/link";
import Script from "next/script";

export default function BookingPage() {
  return (
    <main className="min-h-screen px-6 py-16 max-w-4xl mx-auto">
      {/* Back nav */}
      <div className="mb-10">
        <Link
          href="/"
          className="font-mono text-emerald-400 text-sm hover:text-emerald-300 transition-colors"
        >
          ← back
        </Link>
      </div>

      {/* Header */}
      <div className="mb-10">
        <span className="font-mono text-emerald-400 text-sm">
          {"// book a session"}
        </span>
        <h1 className="text-3xl md:text-4xl font-bold mt-2 mb-4 text-white">
          Let&apos;s figure out where you are
          <br />
          and where you want to go.
        </h1>
        <p className="text-gray-400 max-w-xl leading-relaxed">
          First session is free. No pitch, no sales talk. Just an honest
          conversation about your situation. I&apos;ll only work with you if I
          genuinely think I can help.
        </p>
      </div>

      {/* Expectation bullets */}
      <div className="mb-10 font-mono text-sm space-y-2 text-gray-400">
        <div>
          <span className="text-emerald-400">✓</span> 30 minutes, no
          obligation
        </div>
        <div>
          <span className="text-emerald-400">✓</span> Direct feedback on your
          current situation
        </div>
        <div>
          <span className="text-emerald-400">✓</span> You only pay after
          results — a better job or a significant hike
        </div>
      </div>

      {/* Micro-copy */}
      <p className="mb-8 font-mono text-xs text-gray-600">
        {"// I read every booking form personally before we meet."}
      </p>

      {/* Cal.com embed */}
      <div
        id="cal-booking-embed"
        style={{ width: "100%", height: "700px", overflow: "scroll" }}
      />

      <Script
        id="cal-embed"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            (function (C, A, L) {
              let p = function (a, ar) { a.q.push(ar); };
              let d = C.document;
              C.Cal = C.Cal || function () {
                let cal = C.Cal;
                let ar = arguments;
                if (!cal.loaded) {
                  cal.ns = {};
                  cal.q = cal.q || [];
                  d.head.appendChild(d.createElement("script")).src = A;
                  cal.loaded = true;
                }
                if (ar[0] === L) {
                  const api = function () { p(api, arguments); };
                  const namespace = ar[1];
                  api.q = api.q || [];
                  typeof namespace === "string"
                    ? (cal.ns[namespace] = api) && p(api, ar)
                    : p(cal, ar);
                  return;
                }
                p(cal, ar);
              };
            })(window, "https://app.cal.com/embed/embed.js", "init");

            Cal("init", { origin: "https://cal.com" });
            Cal("inline", {
              elementOrSelector: "#cal-booking-embed",
              calLink: "rajesh-khadka-19ixsz/30min",
              layout: "month_view",
            });
            Cal("ui", {
              theme: "dark",
              styles: { branding: { brandColor: "#10b981" } },
              hideEventTypeDetails: false,
              layout: "month_view",
            });
          `,
        }}
      />
    </main>
  );
}
