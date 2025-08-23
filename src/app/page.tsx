import Footer from "@/components/Footer";
import { 
  HeroSection,
  FeaturesSection,
  PricingSection,
  TestimonialsSection,
  MissionSection,
  CTASection 
} from "@/components/home";

export default function Home() {
  return (
    <div className="text-foreground">
      <HeroSection />
      <FeaturesSection />
      <PricingSection />
      <TestimonialsSection />
      <MissionSection />
      <CTASection />
      <Footer />
    </div>
  );
}
