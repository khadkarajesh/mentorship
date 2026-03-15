import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import WhoIsItFor from "@/components/WhoIsItFor";
import Services from "@/components/Services";
import HowItWorks from "@/components/HowItWorks";
import Testimonials from "@/components/Testimonials";
import BlogPreview from "@/components/BlogPreview";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <Stats />
      <WhoIsItFor />
      <Services />
      <HowItWorks />
      <Testimonials />
      <BlogPreview />
      <FAQ />
      <Footer />
    </main>
  );
}
