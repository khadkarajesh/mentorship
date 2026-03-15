import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mentorship for Nepali Engineers | Rajesh Khadka",
  description:
    "Pay-on-Success mentorship for Nepali software engineers. System design, interview prep, communication with western clients, and career growth — from an engineer based in Europe.",
  keywords: [
    "Nepal software engineer mentorship",
    "system design nepal",
    "software engineer career nepal",
    "coding interview prep nepal",
    "reflectivedev mentorship",
  ],
  openGraph: {
    title: "Mentorship for Nepali Engineers | Rajesh Khadka",
    description:
      "You only pay after landing a better job or a significant hike. First session is free.",
    url: "https://mentorship.reflectivedev.com",
    siteName: "Reflective Dev Mentorship",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
