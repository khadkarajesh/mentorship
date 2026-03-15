import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Services from "@/components/Services";
import HowItWorks from "@/components/HowItWorks";
import BlogPreview from "@/components/BlogPreview";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <Stats />
      <Services />
      <HowItWorks />
      <BlogPreview />
      <FAQ />
      <Footer />
    </main>
  );
}
