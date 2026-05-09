import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import ServicesSection from "../components/ServiceSection";
import ProjectsSection from "../components/ProjectSection";
import PricingSection from "../components/PricingSection";
import TestimonialsSection from "../components/TestimonialSection";
import CTASection from "../components/CTASection";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <ProjectsSection />
      <PricingSection />
      <TestimonialsSection />
      <CTASection />
      <Footer />
    </>
  );
}