import HeroSection from "@/components/landing/HeroSection";
import ValueCards from "@/components/landing/ValueCards";
import Footer from "@/components/landing/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <ValueCards />
      <Footer />
    </div>
  );
};

export default Index;
