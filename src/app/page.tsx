import Header from "./components/organisms/Header";
import HeroSection from "./components/organisms/HeroSection";
import ServicesSection from "./components/organisms/ServicesSection";
import ContactForm from "./components/organisms/ContactForm";
import AboutSection from "./components/organisms/AboutSection";
import Footer from "./components/organisms/Footer";

export default function HomePage() {
  return (
    <div>
      <Header />
      <HeroSection />
      <ServicesSection />
      <ContactForm />
      <AboutSection />
      <Footer />
    </div>
  );
}
