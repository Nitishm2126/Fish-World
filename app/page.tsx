import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Services from "@/components/Services";
import FeaturedGallery from "@/components/FeaturedGallery";
import InstagramSection from "@/components/InstagramSection";
import YouTubeSection from "@/components/YouTubeSection";
import Testimonials from "@/components/Testimonials";
import About from "@/components/About";
import ContactCTA from "@/components/ContactCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <Services />
      <FeaturedGallery />
      <InstagramSection />
      <YouTubeSection />
      <Testimonials />
      <About />
      <ContactCTA />
    </>
  );
}
