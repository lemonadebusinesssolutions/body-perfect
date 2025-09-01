import NavigationHeader from "@/components/navigation-header";
import HeroSection from "@/components/hero-section";
import AboutSection from "@/components/about-section";
import BenefitsSection from "@/components/benefits-section";
import ResourcesSection from "@/components/resources-section";
import FAQSection from "@/components/faq-section";
import ContactSection from "@/components/contact-section";
import DisclaimerSection from "@/components/disclaimer-section";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <NavigationHeader />
      <HeroSection />
      <AboutSection />
      <BenefitsSection />
      <ResourcesSection />
      <FAQSection />
      <ContactSection />
      <DisclaimerSection />
      <Footer />
    </div>
  );
}
