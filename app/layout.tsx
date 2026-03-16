import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { Analytics } from "@vercel/analytics/react";

export const metadata: Metadata = {
  title: "Rajesh Khadka | Pay-on-Success Engineering Mentorship",
  description:
    "Pay-on-Success mentorship for Nepali software engineers. System design, interview prep, communication with western clients, and career growth — from a Senior Engineer at Synopsys based in Europe.",
  alternates: {
    canonical: "https://mentorship.reflectivedev.com",
  },
  openGraph: {
    title: "Rajesh Khadka | Pay-on-Success Engineering Mentorship",
    description:
      "You only pay after landing a better job or a significant hike. First session is free — no credit card, no commitment, no pitch. 50+ engineers mentored.",
    url: "https://mentorship.reflectivedev.com",
    siteName: "Reflective Dev Mentorship",
    type: "website",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Rajesh Khadka",
  jobTitle: "Senior Software Engineer",
  worksFor: {
    "@type": "Organization",
    name: "Synopsys",
  },
  url: "https://mentorship.reflectivedev.com",
  sameAs: [
    "https://www.linkedin.com/in/rajeshkhadka/",
    "https://reflectivedev.com/",
  ],
  description:
    "Pay-on-Success engineering mentor for Nepali software developers. 12+ years experience, 50+ engineers mentored.",
  knowsAbout: [
    "System Design",
    "Software Engineering",
    "Career Growth",
    "Interview Preparation",
    "Western Client Communication",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased">
        <Navbar />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
