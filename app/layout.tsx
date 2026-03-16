import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Rajesh Khadka — Pay-on-Success Engineering Mentor",
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
    title: "Rajesh Khadka — Pay-on-Success Engineering Mentor",
    description:
      "You only pay after landing a better job or a significant hike. First session is free.",
    url: "https://mentorship.reflectivedev.com",
    siteName: "Reflective Dev Mentorship",
    type: "website",
    images: [
      {
        url: "https://mentorship.reflectivedev.com/rajesh.jpeg",
        width: 800,
        height: 800,
        alt: "Rajesh Khadka — Pay-on-Success Engineering Mentor",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
