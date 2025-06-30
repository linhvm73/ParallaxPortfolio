import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import PortfolioSection from "@/components/PortfolioSection";
import ResultsSection from "@/components/ResultsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import InsightsSection from "@/components/InsightsSection";
import ContactSection from "@/components/ContactSection";
import FloatingElements from "@/components/FloatingElements";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navigation />
      <FloatingElements />
      <HeroSection />
      
      <AboutSection />
      <ServicesSection />
      <PortfolioSection />
      <ResultsSection />
      <TestimonialsSection />
      <InsightsSection />
      <ContactSection />

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-12 border-t border-border relative">
        <div className="container mx-auto px-6">
          <div className="glassmorphism-card p-8 transition-all duration-500">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="font-playfair text-2xl font-semibold mb-4 md:mb-0">
                VŨ THỊ MỸ LINH
              </div>
              <div className="flex space-x-6">
                <a href="#" className="glassmorphism-card px-4 py-2 text-muted-foreground hover:text-primary-foreground transition-all duration-300 hover:scale-105">LinkedIn</a>
                <a href="#" className="glassmorphism-card px-4 py-2 text-muted-foreground hover:text-primary-foreground transition-all duration-300 hover:scale-105">Behance</a>
                <a href="#" className="glassmorphism-card px-4 py-2 text-muted-foreground hover:text-primary-foreground transition-all duration-300 hover:scale-105">Instagram</a>
              </div>
            </div>
            <div className="border-t border-white/10 mt-8 pt-8 text-center text-muted-foreground text-sm">
              © 2025 Vũ Thị Mỹ Linh. Tất cả quyền được bảo lưu.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
